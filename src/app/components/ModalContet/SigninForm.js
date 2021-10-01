import React, {useContext, useState} from "react";
import {useHistory, useLocation} from "react-router-dom";
import {AuthContext} from "../../helpers/AuthContext";
import * as VscIcons from "react-icons/vsc";

const SigninForm = (props) => {
    let history = useHistory();
    let location = useLocation();
    const { setAuthState } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [regEmail, setRegEmail] = useState("");
    const [regPassword, setRegPassword] = useState("");
    const [regRePassword, setRegRePassword] = useState("");
    const [toggleForm, setToggleForm] = useState(false);
    const [message, setMessage] = useState("");

    let {from} = location.state || {from: {pathname: "/shopping"}};
    const handleSignin = (e) => {
        e.preventDefault();
        const data = {
            id: 1,
            email: email,
            password: password,
            role: 5,
        }
        if ((data.email !== '') && (data.password !== '')) {
            localStorage.setItem("accessToken", "true");
            setAuthState({
                id: data.id,
                email: data.email,
                role: data.role,
                isAuthenticated: true,
            })
            setEmail("");
            setPassword("");
            setMessage("");
            props.handleClose();
            history.replace(from);
        }
        else {
            setMessage("User/Password invalid.");
        }
    }
    const handleSignup = (e) => {
        e.preventDefault();
        const data = {
            id: 1,
            email: regEmail,
            password: regPassword,
            rePassword: regRePassword,
            role: 5,
        }
        if ((data.email !== '') && (data.password !== '') && (data.rePassword !== '')) {
            console.log(data.password);
            console.log(data.rePassword);
            if (data.password === data.rePassword) {
                localStorage.setItem("accessToken", "true");
                setAuthState({
                    id: data.id,
                    email: data.email,
                    role: data.role,
                    isAuthenticated: true,
                })
                setRegEmail("");
                setRegPassword("");
                setRegRePassword("");
                setMessage("");
                props.handleClose();
            }
            else {
                setMessage("Password and RePassword don't match");
                setRegPassword("");
                setRegRePassword("");
            }
        }
        else {
            setMessage("Fill in all fields.");
        }
    }

    const handleToggleForm = () => {
        setToggleForm(!toggleForm);
    }

    return(
        <div id="signinForm" className="container">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-4 mx-auto">
                    <div className="card border-0 shadow rounded-3 my-5">
                        <div className="card-body">
                            <button className="modal-close" onClick={props.handleClose}>
                                <VscIcons.VscClose size={24}/>
                            </button>
                            <h5 className="card-title text-center fw-light fs-5 mb-3">
                                {!toggleForm ? 'Welcome back!':'Register'}
                            </h5>
                            {message && <p className='alert alert-danger p-2'>{message}</p>}
                            <div>
                                {!toggleForm ?
                                    <form onSubmit={handleSignin}>
                                        <div className="form-floating mb-3">
                                            <input type="email" className="form-control" id="floatingInput" name="email" value={email}
                                                   placeholder="name@example.com" onChange={e => setEmail(e.target.value)}/>
                                            <label htmlFor="floatingInput">Email address</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="password" className="form-control" id="floatingPassword" name="password" value={password}
                                                   placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                                            <label htmlFor="floatingPassword">Password</label>
                                        </div>
                                        <div className="d-grid">
                                            <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">
                                                Sign in
                                            </button>
                                        </div>
                                        <hr className="my-3"/>
                                        <div className="mb-3 text-center">
                                            <button className="btn btn-sm p-0" type="button" onClick={handleToggleForm}>
                                                Don't have account? Register
                                            </button>
                                        </div>
                                    </form>:
                                    <form onSubmit={handleSignup}>
                                        <div className="form-floating mb-3">
                                            <input type="email" className="form-control" id="floatingInput" name="email" value={regEmail}
                                                   placeholder="name@example.com" onChange={e => setRegEmail(e.target.value)}/>
                                            <label htmlFor="floatingInput">Email address</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="password" className="form-control" id="floatingPassword" name="password" value={regPassword}
                                                   placeholder="Password" onChange={e => setRegPassword(e.target.value)}/>
                                            <label htmlFor="floatingPassword">Password</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="password" className="form-control" id="floatingRePassword" name="rePassword" value={regRePassword}
                                                   placeholder="Re-Password" onChange={e => setRegRePassword(e.target.value)}/>
                                            <label htmlFor="floatingPassword">Re-Password</label>
                                        </div>
                                        <div className="d-grid">
                                            <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">
                                                Sign up
                                            </button>
                                        </div>
                                        <hr className="my-3"/>
                                        <div className="mb-3 text-center">
                                            <button className="btn btn-sm p-0" type="button" onClick={handleToggleForm}>
                                                {!toggleForm ? 'Don\'t have account? Register':'Have account? Login'}
                                            </button>
                                        </div>
                                    </form>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SigninForm;
