import React, {useContext, useState} from 'react';
import LayoutSite from "../layouts/LayoutSite";
import '../../assets/css/Checkout.css'
import Container from "../components/Container";
import { connect } from "react-redux";
import {AuthContext} from "../helpers/AuthContext";
import CheckoutSummary from "../components/checkout/CheckoutSummary";
import CheckoutForms from "../components/checkout/CheckoutForms";
import {Redirect} from "react-router-dom";


const Checkout = (props) => {
    const {cart, totalAmount, totalQuantity} = props;
    const {authState} = useContext(AuthContext);
    const [state, setState] = useState({
        bg_on_off: false,
        form:'login',
    });
    const [toggle] = useState({
        login:'register',
        register:'login'
    });

    const formatCurrency = (value) => {
        return Number(value).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });
    }

    if (authState.isAuthenticated === false) return <Redirect to={'/cart'}/>
    return (
        <LayoutSite state={state}>
            <Container id="checkout">
                <div className="row g-5">
                    <CheckoutForms
                        authState={authState}
                        state={state}
                        setState={setState}
                        toggle={toggle}
                    />
                    <CheckoutSummary
                        cart={cart}
                        totalAmount={totalAmount}
                        totalQuantity={totalQuantity}
                        formatCurrency={formatCurrency}
                    />
                </div>
            </Container>
        </LayoutSite>
    );
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart.cart,
        totalAmount: state.cart.totalAmount,
        totalQuantity: state.cart.totalQuantity
    };
};

export default connect(mapStateToProps)(Checkout);
