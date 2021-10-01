import React, {Fragment, useContext, useState} from "react";
import '../../assets/css/Cart.css';
import LayoutSite from "../layouts/LayoutSite";
import Container from "../components/Container";
import {connect} from "react-redux";
import {updateCart, removeProductCart} from "../actions/cartAction";
import {Link} from "react-router-dom";
import * as IoIcons from "react-icons/io5";
import {Accordion, AccordionTab} from "primereact/accordion";
import {AuthContext} from "../helpers/AuthContext";
import ModalDefault from "../components/ModalDefault";
import SigninForm from "../components/ModalContet/SigninForm";

const Cart = (props) => {
    const {totalAmount, totalQuantity, cart} = props;
    const [state, setState] = useState({
        bg_on_off: false,
        modal: false,
    });

    const modalOpen = () => {
        setState({modal: true});
    }
    const modalClose = () => {
        setState({modal: false});
    }

    const handleOnClickUpdate = (id, operator, quantity) => {
        if (quantity === 1 && operator === "-") {
            props.updateCart(id, operator);
            props.removeProductCart(id);
        }
        else {
            props.updateCart(id, operator);
        }
    }
    const handleOnClickRemove = (id) => {
        props.removeProductCart(id);
    }

    const formatCurrency = (value) => {
        return Number(value).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });
    }

    return (
        <LayoutSite state={state}>
            <Container id={"cart"}>
                <div className="wrapper wrapper-content">
                    {cart.length > 0 ?
                        <div className="row">
                            <div className="col-md-8 col-lg-9">
                                <CartList
                                    cart={cart}
                                    totalQuantity={totalQuantity}
                                    formatCurrency={formatCurrency}
                                    handleOnClickUpdate={handleOnClickUpdate}
                                    handleOnClickRemove={handleOnClickRemove}
                                    modal={state.modal}
                                    modalOpen={modalOpen}
                                    modalClose={modalClose}
                                />
                            </div>
                            <div className="col-md-4 col-lg-3">
                                <CartSummary
                                    totalAmount={totalAmount}
                                    formatCurrency={formatCurrency}
                                    modal={state.modal}
                                    modalOpen={modalOpen}
                                    modalClose={modalClose}
                                />
                            </div>
                        </div>:
                        <div className="empty-product">
                            <h3>There are no products in your cart.</h3>
                            <Link to="/shopping">Shopping now</Link>
                        </div>}
                </div>
            </Container>
        </LayoutSite>
    );
}

const CartList = (props) => {
    let {authState} = useContext(AuthContext);
    const {totalQuantity, cart, formatCurrency, handleOnClickRemove, handleOnClickUpdate} = props;


    return(
        <div className="cartItem">
            {/*<!-- Accordion -->*/}
            <div className="d-md-none">
                <Accordion className="accordion-custom mb-3 mb-md-0">
                    <AccordionTab header={<div className="ibox-title">
                        <span className="pull-right">(<strong>{totalQuantity}</strong>) Items in your cart</span>
                    </div>}>
                        {cart.map(cart => {
                            const {id, image, title, description, price, quantity} = cart;
                            return (
                                <div className="ibox-content" key={id}>
                                    <div className="table-responsive">
                                        <table className="table shopping-cart-table">
                                            <tbody>
                                            <tr>
                                                <td width="90" className="thumbnail">
                                                    <img src={image} alt={title} className="img-fluid"/>
                                                </td>
                                                <td className="desc px-lg-3 px-md-2">
                                                    {/*<img src={image} alt={title} className="img-fluid thumbnail-bg opacity-25"/>*/}
                                                    <div className="card bg-transparent border-0">
                                                        <h5><span className="text-navy">{title}</span></h5>
                                                        <p className="small d-none d-lg-block">{description.slice(0,150).concat("...")}</p>
                                                        <div className="m-t-sm d-none d-md-block">
                                                            <button className="btn p-0 text-danger me-2" onClick={() => handleOnClickRemove(id)}>
                                                                <i className="fa fa-trash" style={{fontSize:'20px'}}/>
                                                            </button>
                                                            |
                                                            <button className="btn p-0 text-muted ms-2" onClick={() => handleOnClickUpdate(id, "-", quantity)}>
                                                                <IoIcons.IoRemoveCircleOutline className="text-primary" style={{fontSize:'24px'}}/>
                                                            </button>
                                                            <button className="btn p-0 text-muted ms-2" onClick={() => handleOnClickUpdate(id, "+", quantity)}>
                                                                <IoIcons.IoAddCircleOutline className="text-success" style={{fontSize:'24px'}}/>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-center">
                                                    <div>
                                                        <span className="me-2">{formatCurrency(price)}</span>
                                                        <s className="small text-muted">{formatCurrency(230)}</s>
                                                    </div>
                                                    <div className="mt-2 mb-3 d-flex">
                                                        <input type="number" className="form-control me-2 p-0 text-center ps-2 quantity"
                                                               step="1" value={quantity} readOnly style={{width:'50px'}}/>
                                                        <h5 className="pt-1">{formatCurrency(price * quantity)}</h5>
                                                    </div>
                                                    <div className="m-t-sm d-md-none">
                                                        <button className="btn p-0 text-danger me-2" onClick={() => handleOnClickRemove(id)}>
                                                            <i className="fa fa-trash" style={{fontSize:'20px'}}/>
                                                        </button>
                                                        |
                                                        <button className="btn p-0 text-muted ms-2" onClick={() => handleOnClickUpdate(id, "-", quantity)}>
                                                            <IoIcons.IoRemoveCircleOutline className="text-primary" style={{fontSize:'24px'}}/>
                                                        </button>
                                                        <button className="btn p-0 text-muted ms-2" onClick={() => handleOnClickUpdate(id, "+", quantity)}>
                                                            <IoIcons.IoAddCircleOutline className="text-success" style={{fontSize:'24px'}}/>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )
                        })}
                    </AccordionTab>
                </Accordion>
            </div>
            {/*<!-- Table -->*/}
            <div className="d-none d-md-block">
                <div className="ibox-title mb-2">
                    <span className="pull-right">(<strong>{totalQuantity}</strong>) Items in your cart</span>
                </div>
                {cart.map(cart => {
                    const {id, image, title, description, price, quantity} = cart;
                    return (
                        <div className="ibox-content" key={id}>
                            <div className="table-responsive">
                                <table className="table shopping-cart-table">
                                    <tbody>
                                    <tr>
                                        <td width="90" className="thumbnail">
                                            <img src={image} alt={title} className="img-fluid"/>
                                        </td>
                                        <td className="desc px-lg-3 px-md-2">
                                            {/*<img src={image} alt={title} className="img-fluid thumbnail-bg opacity-25"/>*/}
                                            <div className="card bg-transparent border-0">
                                                <h5><span className="text-navy">{title}</span></h5>
                                                <p className="small d-none d-lg-block">{description.slice(0,150).concat("...")}</p>
                                                <div className="m-t-sm">
                                                    <button className="btn p-0 text-danger me-2" onClick={() => handleOnClickRemove(id)}>
                                                        <i className="fa fa-trash" style={{fontSize:'20px'}}/>
                                                    </button>
                                                    |
                                                    <button className="btn p-0 text-muted ms-2" onClick={() => handleOnClickUpdate(id, "-", quantity)}>
                                                        <IoIcons.IoRemoveCircleOutline className="text-primary" style={{fontSize:'24px'}}/>
                                                    </button>
                                                    <button className="btn p-0 text-muted ms-2" onClick={() => handleOnClickUpdate(id, "+", quantity)}>
                                                        <IoIcons.IoAddCircleOutline className="text-success" style={{fontSize:'24px'}}/>
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-center">
                                            <div>
                                                <span className="me-2">{formatCurrency(price)}</span>
                                                <s className="small text-muted">{formatCurrency(230)}</s>
                                            </div>
                                            <div className="mt-2 mb-3 d-flex">
                                                <input type="number" className="form-control me-2 p-0 text-center ps-2 quantity"
                                                       step="1" value={quantity} readOnly style={{width:'50px'}}/>
                                                <h5 className="pt-1">{formatCurrency(price * quantity)}</h5>
                                            </div>

                                        </td>

                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )
                })}
            </div>
            {/*<!-- Buttons -->*/}
            <div className="ibox-content mb-3 mb-md-0">
                {authState.isAuthenticated ?
                    <Link to="/checkout" className="btn btn-primary">
                        <i className="fa fa-shopping-cart"/> Checkout
                    </Link>:
                    <button className="btn btn-primary" onClick={props.modalOpen}>
                        <i className="fa fa-shopping-cart"/> Checkout
                    </button>}
                <Link to="/shopping" className="btn btn-white">
                    <i className="fa fa-arrow-left"/> Continue shopping
                </Link>
            </div>


            <ModalDefault show={props.modal}>
                <SigninForm handleClose={props.modalClose}/>
            </ModalDefault>
        </div>
    )
}
const CartSummary = (props) => {
    let {authState} = useContext(AuthContext);
    const {totalAmount, formatCurrency} = props;
    return(
        <div>
            <div className="ibox">
                <div className="ibox-content">
                    <span>Total</span>
                    <h2 className="font-bold">{formatCurrency(totalAmount)}</h2>
                    <hr/>
                    <div className="m-t-sm mb-5">
                        <div className="btn-group">
                            {authState.isAuthenticated ?
                                <Link to="/checkout" className="btn btn-primary btn-sm">
                                    <i className="fa fa-shopping-cart"/> Checkout
                                </Link>:
                                <button className="btn btn-primary btn-sm" onClick={props.modalOpen}>
                                    <i className="fa fa-shopping-cart"/> Checkout
                                </button>}
                            <Link to="/shopping" className="btn btn-white btn-sm"> Shopping</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/*
            <div className="ibox">
                <div className="ibox-content">
                    <p className="font-bold">
                        Other products you may be interested
                    </p>
                    <hr className="w-75 mx-auto"/>
                    <div>
                        <a href="#" className="product-name"> Product 1</a>
                        <div className="small m-t-xs">
                            Many desktop publishing packages and web page editors now.
                        </div>
                        <div className="m-t text-righ">

                            <a href="#" className="btn btn-xs btn-outline btn-primary">Info <i
                                className="fa fa-long-arrow-right"></i> </a>
                        </div>
                    </div>
                    <hr/>
                    <div>
                        <a href="#" className="product-name"> Product 2</a>
                        <div className="small m-t-xs">
                            Many desktop publishing packages and web page editors now.
                        </div>
                        <div className="m-t text-righ">

                            <a href="#" className="btn btn-xs btn-outline btn-primary">Info <i
                                className="fa fa-long-arrow-right"></i> </a>
                        </div>
                    </div>
                </div>
            </div>
            */}
            <hr/>
            <div className="ibox">
                <div className="ibox-title">
                    <h5>Support</h5>
                </div>
                <div className="ibox-content text-center">
                    <h5><i className="fa fa-phone"/> +55(51)xxxxx-xxxx</h5>
                    <span className="small">
                        Please contact with us if you have any questions. We are avalible 24h.
                    </span>
                </div>
            </div>

            <ModalDefault show={props.modal}>
                <SigninForm handleClose={props.modalClose}/>
            </ModalDefault>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        cart: state.cart.cart,
        totalAmount: state.cart.totalAmount,
        totalQuantity: state.cart.totalQuantity
    };
};

export default connect(mapStateToProps,{updateCart, removeProductCart})(Cart);
