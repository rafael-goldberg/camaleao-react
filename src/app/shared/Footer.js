import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import {Link} from "react-router-dom";

const Footer = () => {
    return(
        <footer className="footer py-4 pb-5 border-top fixed-bottom bg-light">
            <div className="d-flex flex-wrap justify-content-between align-items-center container">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1 d-none d-md-block">
                        <i className="bi bi-bootstrap" width="30" height="24"/>
                    </a>
                    <span className="text-muted">&copy; 2021</span>
                </div>

                <ScrollToTop/>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><Link className="text-muted" to="/">
                        <i className="bi bi-twitter" width="24" height="24"/>
                    </Link></li>
                    <li className="ms-3"><Link className="text-muted" to="/">
                        <i className="bi bi-instagram" width="24" height="24"/>
                    </Link></li>
                    <li className="ms-3"><Link className="text-muted" to="/">
                        <i className="bi bi-facebook" width="24" height="24"/>
                    </Link></li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer;
