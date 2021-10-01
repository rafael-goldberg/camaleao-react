import React, {Fragment, useState} from "react";
import '../../../assets/css/ProductCard.css';
import ReactTooltip from 'react-tooltip';
import * as ImIcons from 'react-icons/im';
import ImageGallery from 'react-image-gallery';
import { connect } from "react-redux";
import { addProductCart, updateCart } from "../../actions/cartAction";


const ProductCard = (props) => {
    const {image, title, rating, price, old_price, quantity, description} = props.product;
    const [state, setState] = useState({
        modal: false,
        modalProduct: null,
    });
    const images = [
        {
            original: image,
            originalHeight: '300px',
            thumbnail: image,
        },
        {
            original: image,
            originalHeight: '300px',
            thumbnail: image,
        },
        {
            original: image,
            originalHeight: '300px',
            thumbnail: image,
        },
    ];

    const handleOpenModal = (product) => {
        setState({
            modal: true,
            modalProduct: product
        })
    }
    const handleCloseModal = () => {
        setState({
            modal: false,
        })
    }

    const formatCurrency = (value) => {
        return Number(value).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });
    };

    const handleAddToCart = (product) => {
        if (props.cart.length > 0) {
            let id = product.id;
            let cartIndex = props.cart.findIndex(cart => {
                return cart.id === id;
            });
            if (cartIndex === -1) {
                props.addProductCart(product);
            }
            else {
                props.updateCart(id, "+");
            }
        }
        else {
            props.addProductCart(product);
        }
    }

    return(
        <div id="productCard" className="card h-100 bg-light">
            {quantity <= 5 && <Fragment>
                <div className="badge bg-dark bg-gradient text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>
                    Sale
                </div>
            </Fragment>}
            <div className="text-center mt-3 bg-white py-3">
                <img className="img-fluid" src={image} alt="..." style={{height:'80px'}}/>
            </div>
            <div className="card-body p-4">
                <div className="text-center">
                    <h5 className="fw-bolder title" data-tip={title}>{title}</h5>
                    <ReactTooltip className='extraClass' delayHide={1500} effect='solid'/>

                    {/*<div className="d-flex justify-content-center small text-warning mb-2">
                        {rating.rate === 5 && <Fragment>
                            <div className="bi-star-fill"/>
                            <div className="bi-star-fill"/>
                            <div className="bi-star-fill"/>
                            <div className="bi-star-fill"/>
                            <div className="bi-star-fill"/>
                        </Fragment>}
                        {rating.rate >= 4 && rating.rate < 5 && <Fragment>
                            <div className="bi-star-fill"/>
                            <div className="bi-star-fill"/>
                            <div className="bi-star-fill"/>
                            <div className="bi-star-fill"/>
                            <div className="bi-star"/>
                        </Fragment>}
                        {rating.rate >= 3 && rating.rate < 4 && <Fragment>
                            <div className="bi-star-fill"/>
                            <div className="bi-star-fill"/>
                            <div className="bi-star-fill"/>
                            <div className="bi-star"/>
                            <div className="bi-star"/>
                        </Fragment>}
                        {rating.rate >= 2 && rating.rate < 3 && <Fragment>
                            <div className="bi-star-fill"/>
                            <div className="bi-star-fill"/>
                            <div className="bi-star"/>
                            <div className="bi-star"/>
                            <div className="bi-star"/>
                        </Fragment>}
                        {rating.rate >= 1 && rating.rate < 2 && <Fragment>
                            <div className="bi-star-fill"/>
                            <div className="bi-star"/>
                            <div className="bi-star"/>
                            <div className="bi-star"/>
                            <div className="bi-star"/>
                        </Fragment>}
                        {rating.rate < 1 && <Fragment>
                            <div className="bi-star"/>
                            <div className="bi-star"/>
                            <div className="bi-star"/>
                            <div className="bi-star"/>
                            <div className="bi-star"/>
                        </Fragment>}
                    </div>*/}
                    {formatCurrency(price)}
                    <span className="text-muted text-decoration-line-through ms-2">
                        {formatCurrency(1500)}
                    </span>
                </div>
            </div>
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                    <button className="btn btn-primary mt-auto" onClick={() => handleAddToCart(props.product)}>
                        Add to cart
                    </button>
                    <button className="btn text-dark mt-auto" data-tip="Info" onClick={() => handleOpenModal(props.product)}>
                          <ImIcons.ImInfo/>
                    </button>
                    <ReactTooltip className='extraClass' delayHide={1000} effect='solid'/>
                </div>
            </div>

            <Modal show={state.modal} handleCloseModal={handleCloseModal}>

                <div className="container-fliud">
                    <div className="wrapper row">
                        <div className="preview col-md-6">
                            <ImageGallery
                                items={images}
                                thumbnailPosition={"bottom"}
                                showFullscreenButton={false}
                                showIndex={true}
                                autoPlay={true}
                                slideInterval={5000}
                            />
                        </div>
                        <div className="details col-md-6">
                            <h4 className="product-title">{title}</h4>
                            <div className="rating">
                                <span className="stars me-2">
                                    {rating.rate === 5 && <Fragment>
                                        <span className="bi-star-fill"/>
                                        <span className="bi-star-fill"/>
                                        <span className="bi-star-fill"/>
                                        <span className="bi-star-fill"/>
                                        <span className="bi-star-fill"/>
                                    </Fragment>}
                                    {rating.rate >= 4 && rating.rate < 5 && <Fragment>
                                        <span className="bi-star-fill"/>
                                        <span className="bi-star-fill"/>
                                        <span className="bi-star-fill"/>
                                        <span className="bi-star-fill"/>
                                        <span className="bi-star"/>
                                    </Fragment>}
                                    {rating.rate >= 3 && rating.rate < 4 && <Fragment>
                                        <span className="bi-star-fill"/>
                                        <span className="bi-star-fill"/>
                                        <span className="bi-star-fill"/>
                                        <span className="bi-star"/>
                                        <span className="bi-star"/>
                                    </Fragment>}
                                    {rating.rate >= 2 && rating.rate < 3 && <Fragment>
                                        <span className="bi-star-fill"/>
                                        <span className="bi-star-fill"/>
                                        <span className="bi-star"/>
                                        <span className="bi-star"/>
                                        <span className="bi-star"/>
                                    </Fragment>}
                                    {rating.rate >= 1 && rating.rate < 2 && <Fragment>
                                        <span className="bi-star-fill"/>
                                        <span className="bi-star"/>
                                        <span className="bi-star"/>
                                        <span className="bi-star"/>
                                        <span className="bi-star"/>
                                    </Fragment>}
                                    {rating.rate < 1 && <Fragment>
                                        <span className="bi-star"/>
                                        <span className="bi-star"/>
                                        <span className="bi-star"/>
                                        <span className="bi-star"/>
                                        <span className="bi-star"/>
                                    </Fragment>}
                                </span>
                                <span className="review-no small">{rating.count} reviews</span>
                            </div>
                            <div className="vote small">
                                <strong className="small">91%</strong> of buyers enjoyed this product!
                            </div>
                            <p className="product-description">{description}</p>
                            <h6 className="price">Price: <span>{formatCurrency(price)}</span></h6>
                            {old_price > 0 && <h6 className="price">Old Price: <span>{formatCurrency(old_price)}</span></h6>}
                            <h6 className="colors invisible">
                                Colors:
                                <span className="color orange not-available" title="Not In store"/>
                                <span className="color green"/>
                                <span className="color blue"/>
                            </h6>
                            <div className="action mt-5">
                                <button className="add-to-cart btn btn-default" type="button" onClick={() => handleAddToCart(props.product)}>
                                    add to cart
                                </button>
                                {/*
                                <button className="like btn btn-default" type="button">
                                    <span className="btn-txt">Favoritos <br/></span>
                                    <span className="fa fa-heart"/>
                                </button>
                                */}
                                <button className="btn modal-close float-end" onClick={handleCloseModal}>
                                    close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </Modal>
        </div>
    )
}

const Modal = ({show, children}) => {
    const showHideClassName = show ? "modal d-block" : "modal d-none";

    return (
        <div className={showHideClassName}>
            <div className="modal-container">
                {children}
            </div>
        </div>
    );
};


const mapStateToProps = state => {
    return {
        cart: state.cart.cart
    };
};

export default connect(mapStateToProps,{addProductCart, updateCart})(ProductCard);
