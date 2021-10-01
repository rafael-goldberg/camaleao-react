import React, {useContext, useState} from 'react';
import {useHistory, useLocation} from "react-router-dom";
import {AuthContext} from "../helpers/AuthContext";
import '../../assets/css/Signin.css';
import LayoutSite from "../layouts/LayoutSite";

const Signin = () => {
    let history = useHistory();
    let location = useLocation();
    const { setAuthState } = useContext(AuthContext);
    const [state] = useState({
        bg_on_off: false,
    });
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let {from} = location.state || {from: {pathname: "/admin"}};
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            id: 1,
            email: email,
            role: 1,
            password: password,
        }
        if ((data.email !== '') && (data.password !== '')) {
            localStorage.setItem("accessToken", "true");
            setAuthState({
                id: data.id,
                email: data.email,
                role: data.role,
                isAuthenticated: true,
            })
            history.replace(from);
        }
        else {
            alert("User/Password invalid.")
        }
    }

    return (
        <LayoutSite state={state}>
            <div id="signin">

                <div className="container">
                    <div className="row">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div className="card border-0 shadow rounded-3 my-5">
                                <div className="card-body p-4 p-sm-5">
                                    <h5 className="card-title text-center mb-5 fw-light fs-5">Welcome back!</h5>
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-floating mb-3">
                                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                                                onChange={e => {setEmail(e.target.value)}} autoFocus autoComplete="off"/>
                                            <label htmlFor="floatingInput">Email address</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                                                   onChange={e => {setPassword(e.target.value)}}/>
                                            <label htmlFor="floatingPassword">Password</label>
                                        </div>

                                        <div className="d-grid">
                                            <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">
                                                Sign in
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </LayoutSite>
    );
}

export default Signin;
