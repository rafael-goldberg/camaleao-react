import React from "react";

const CheckoutSummary = (props) => {
    const {cart, totalAmount, totalQuantity} = props;
    return(
        <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-primary">Your cart</span>
                <span className="badge bg-primary rounded-pill">{totalQuantity}</span>
            </h4>
            <ul className="list-group mb-3">
                {cart.map(cart => {
                    const {id, title, category, price} = cart;
                    return(
                        <li key={id} className="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                                <h6 className="my-0">{title}</h6>
                                <small className="text-muted">{category}</small>
                            </div>
                            <span className="text-muted">{props.formatCurrency(price)}</span>
                        </li>
                    )
                })}
                <li className="list-group-item d-flex justify-content-between">
                    <span>Total (BRL)</span>
                    <strong>{props.formatCurrency(totalAmount)}</strong>
                </li>
            </ul>
        </div>
    )
}
export default CheckoutSummary;
