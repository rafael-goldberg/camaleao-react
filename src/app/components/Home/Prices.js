import React, {Fragment} from "react";
import {Link} from "react-router-dom";

const Prices = () => {
    return(
        <Fragment>
            <div className="text-center mb-5">
                <h2 className="fw-bolder">Pay as you grow</h2>
                <p className="lead mb-0">With our no hassle pricing plans</p>
            </div>
            <div className="row gx-5 justify-content-center">
                <div className="col-lg-6 col-xl-4">
                    <div className="card mb-5 mb-xl-0">
                        <div className="card-body p-5">
                            <div className="small text-uppercase fw-bold text-muted">Free</div>
                            <div className="mb-3">
                                <span className="display-4 fw-bold">$0</span>
                                <span className="text-muted">/ mo.</span>
                            </div>
                            <ul className="list-unstyled mb-4">
                                <li className="mb-2">
                                    <i className="bi bi-check text-primary"></i>
                                    <strong>1 users</strong>
                                </li>
                                <li className="mb-2">
                                    <i className="bi bi-check text-primary"></i>
                                    5GB storage
                                </li>
                                <li className="mb-2">
                                    <i className="bi bi-check text-primary"></i>
                                    Unlimited public projects
                                </li>
                                <li className="mb-2">
                                    <i className="bi bi-check text-primary"></i>
                                    Community access
                                </li>
                                <li className="mb-2 text-muted">
                                    <i className="bi bi-x"></i>
                                    Unlimited private projects
                                </li>
                                <li className="mb-2 text-muted">
                                    <i className="bi bi-x"></i>
                                    Dedicated support
                                </li>
                                <li className="mb-2 text-muted">
                                    <i className="bi bi-x"></i>
                                    Free linked domain
                                </li>
                                <li className="text-muted">
                                    <i className="bi bi-x"></i>
                                    Monthly status reports
                                </li>
                            </ul>
                            <div className="d-grid">
                                <Link className="btn btn-outline-primary" to="/">Choose plan</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xl-4">
                    <div className="card mb-5 mb-xl-0 bg-light">
                        <div className="card-body p-5">
                            <div className="small text-uppercase fw-bold">
                                <i className="bi bi-star-fill text-warning"/>
                                Pro
                            </div>
                            <div className="mb-3">
                                <span className="display-4 fw-bold">$9</span>
                                <span className="text-muted">/ mo.</span>
                            </div>
                            <ul className="list-unstyled mb-4">
                                <li className="mb-2">
                                    <i className="bi bi-check text-primary"/>
                                    <strong>5 users</strong>
                                </li>
                                <li className="mb-2">
                                    <i className="bi bi-check text-primary"/>
                                    5GB storage
                                </li>
                                <li className="mb-2">
                                    <i className="bi bi-check text-primary"/>
                                    Unlimited public projects
                                </li>
                                <li className="mb-2">
                                    <i className="bi bi-check text-primary"/>
                                    Community access
                                </li>
                                <li className="mb-2">
                                    <i className="bi bi-check text-primary"/>
                                    Unlimited private projects
                                </li>
                                <li className="mb-2">
                                    <i className="bi bi-check text-primary"/>
                                    Dedicated support
                                </li>
                                <li className="mb-2">
                                    <i className="bi bi-check text-primary"/>
                                    Free linked domain
                                </li>
                                <li className="text-muted">
                                    <i className="bi bi-x"/>
                                    Monthly status reports
                                </li>
                            </ul>
                            <div className="d-grid">
                                <Link className="btn btn-primary" to="/">Choose plan</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xl-4">
                    <div className="card">
                        <div className="card-body p-5">
                            <div className="small text-uppercase fw-bold text-muted">Enterprise</div>
                            <div className="mb-3">
                                <span className="display-4 fw-bold">$49</span>
                                <span className="text-muted">/ mo.</span>
                            </div>
                            <ul className="list-unstyled mb-4">
                                <li className="mb-2">
                                    <i className="bi bi-check text-primary"/>
                                    <strong>Unlimited users</strong>
                                </li>
                                <li className="mb-2">
                                    <i className="bi bi-check text-primary"/>
                                    5GB storage
                                </li>
                                <li className="mb-2">
                                    <i className="bi bi-check text-primary"/>
                                    Unlimited public projects
                                </li>
                                <li className="mb-2">
                                    <i className="bi bi-check text-primary"/>
                                    Community access
                                </li>
                                <li className="mb-2">
                                    <i className="bi bi-check text-primary"/>
                                    Unlimited private projects
                                </li>
                                <li className="mb-2">
                                    <i className="bi bi-check text-primary"/>
                                    Dedicated support
                                </li>
                                <li className="mb-2">
                                    <i className="bi bi-check text-primary"/>
                                    <strong>Unlimited</strong>
                                    linked domains
                                </li>
                                <li className="text-muted">
                                    <i className="bi bi-check text-primary"/>
                                    Monthly status reports
                                </li>
                            </ul>
                            <div className="d-grid">
                                <Link className="btn btn-outline-primary" to="/">Choose plan</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Prices;
