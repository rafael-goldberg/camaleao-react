import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const LayoutSite = (props) => {
    const {children, state} = props;

    return(
        <div id="layoutSite" className={state.bg_on_off ? 'layout-site-bg':'layout-site'}>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    )
}
export default LayoutSite;
