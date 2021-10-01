import React, {useContext, useState} from "react";
import {AuthContext} from "../../helpers/AuthContext";

const CartModal = (props) => {
    const { handleClose, show } = props;
    const showHideClassName = show ? "modal d-block" : "modal d-none";
    const { setAuthState } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            id: 1,
            email: email,
            password: password,
        }

    }

    return(
        <div className={showHideClassName}>
            <div className="modal-container card">
                <div className="card-body">
                    <h3 className="login-heading mb-4">Welcome back!</h3>
                    {mensagem ? mensagem : null}
                    <form onClick={handleSubmit}>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="email" name="email" autoFocus
                                   placeholder="name@example.com" onChange={(e) => setEmail({email: e.target.value})}/>
                            <label htmlFor="email">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" id="password" name="password"
                                   placeholder="Password" onChange={(e) => setPassword({password: e.target.value})}/>
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="d-grid">
                            <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">
                                Sign in
                            </button>
                        </div>
                    </form>
                    <div className="text-center">
                        <button className="btn btn-outline-secondary mt-3 modal-close" onClick={handleClose}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CartModal;
