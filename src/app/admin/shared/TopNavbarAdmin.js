import React, {useContext, useEffect} from "react";
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {AuthContext} from "../../helpers/AuthContext";
import * as GoIcons from "react-icons/go";

const TopNavbarAdmin = (props) => {
    const history = useHistory();
    const location = useLocation();
    const { setAuthState } = useContext(AuthContext);

    let {from} = location.state || {from: {pathname: "/signin"}};
    const handleSignout = () => {
        localStorage.removeItem("accessToken");
        setAuthState({
            email: "",
            isAuthenticated: false,
        });
        history.replace(from);
    }

    useEffect(() => {
        window.onscroll = function() {myFunction()};

        let navbar = document.getElementById("topNavbarAdmin");
        let sticky = navbar.offsetTop;

        function myFunction() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky")
            } else {
                navbar.classList.remove("sticky");
            }
        }
    },[]);

    return(
        <div id="topNavbarAdmin" className="bg-light border-bottom">
            <div className='container'>
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2">
                    <span className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none d-none d-sm-block">
                        Brand
                    </span>
                    <div className="col-3">
                        <button type="button" id="sidebarCollapse" onClick={props.toggleSidebar}
                                className="btn text-sidebar bg-secondary shadow-none d-lg-none
                                sidebarCollapseTop d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2">
                            <i className="fas fa-align-left"/>
                            <span/>
                        </button>
                    </div>
                    <div className="col-3 offset-3">
                        <NavLink to="#" className="nav-item nav-link text-dark float-end" onClick={handleSignout}>
                            <GoIcons.GoSignOut/>
                        </NavLink>
                    </div>
                </header>
            </div>
        </div>
    )
}
export default TopNavbarAdmin;
