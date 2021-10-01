import React, {Fragment, useContext, useEffect, useState} from 'react';
import '../../assets/css/Navbar.css';
import {Link, useHistory, useLocation} from "react-router-dom";
import {AuthContext} from "../helpers/AuthContext";
import MenuLink from "../components/MenuLink";
import ModalDefault from "../components/ModalDefault";
import * as GoIcons from "react-icons/go";
import SigninForm from "../components/ModalContet/SigninForm";
import { connect } from "react-redux";
import { getCart } from "../actions/cartAction";

const Navbar = (props) => {
    const {totalQuantity} = props;
    const history = useHistory();
    const location = useLocation();
    const { authState } = useContext(AuthContext);
    const { setAuthState } = useContext(AuthContext);
    const [state, setState] = useState({
        modal: false,
        menu: false,
        homeLinkClass: "nav-item nav-link",
        dashboardLinkClass: "nav-item nav-link",
        detailsLinkClass: "nav-item nav-link",
        signinLinkClass: "nav-item nav-link",
        menuClass: ""
    });

    const modalOpen = () => {
        setState({modal: true});
    }
    const modalClose = () => {
        setState({modal: false});
    }

    let {from} = location.state || {from: {pathname: "/"}};
    const handleSignout = () => {
        localStorage.removeItem("accessToken");
        setAuthState({
            id: null,
            email: "",
            role: null,
            isAuthenticated: false,
        });
        history.replace(from);
    }

    useEffect(() => {
        window.onscroll = function() {myFunction()};

        let navbar = document.getElementById("navbarTop");
        let sticky = navbar.offsetTop;

        function myFunction() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky");
            } else {
                navbar.classList.remove("sticky");
            }
        }
    },[]);

    useEffect(() => {
        props.getCart();
    },[props]);

    return (
        <Fragment>
            <nav id="navbarTop" className="py-2 bg-light border-bottom">
                <div className="container d-flex flex-wrap">
                    <ul className="nav me-auto">
                        <li className="nav-item"><MenuLink to="/" label="Home" className="text-dark" activeOnlyWhenExact={true}/></li>
                        <li className="nav-item"><MenuLink to="/shopping" className="text-dark" label="Shopping" activeOnlyWhenExact={true}/></li>
                        <li className="nav-item"><MenuLink to="/contact" className="text-dark" label="Contact" activeOnlyWhenExact={true}/></li>
                    </ul>
                    <ul className="nav">
                        <Link to={"/cart"} className="nav-item nav-link text-muted border border-secondary rounded">
                            <i className="bi-cart-fill me-1"/>
                            <span className="badge bg-muted text-secondary border border-secondary ms-1 rounded-pill">
                                {totalQuantity ? totalQuantity:0}
                            </span>
                        </Link>
                        {authState.isAuthenticated === true ?
                            <Link to="/" className="nav-item nav-link" onClick={handleSignout}>
                                <GoIcons.GoSignOut/>
                            </Link>:
                            <button className="btn shadow-none" onClick={modalOpen}>
                                <GoIcons.GoSignIn/>
                            </button>}
                    </ul>
                </div>
            </nav>
            <header className="bg-white py-3 border-bottom">
                <div className="container d-flex flex-wrap justify-content-center">
                    <Link to="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
                        <i className="bi bi-bootstrap me-2 fa-2x"/>
                        <span className="fs-4">Double header</span>
                    </Link>
                    <form className="col-12 col-lg-auto mb-3 mb-lg-0">
                        <input type="search" className="form-control" placeholder="Search..." aria-label="Search"/>
                    </form>
                </div>
            </header>

            <ModalDefault show={state.modal}>
                <SigninForm handleClose={modalClose}/>
            </ModalDefault>
        </Fragment>
    );
}

const mapStateToProps = state => {
    return {
        cart: state.cart.cart,
        totalQuantity: state.cart.totalQuantity
    };
};

export default connect(mapStateToProps, {getCart})(Navbar);
