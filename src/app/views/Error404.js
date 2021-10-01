import React from 'react';
import {Link, useLocation} from "react-router-dom";
import LayoutSite from "../layouts/LayoutSite";

const Error404 = () => {
    let location = useLocation();

    return (
        <LayoutSite>
            Error 404
            <h3>
                No match for <code>{location.pathname}</code>
            </h3>
            Return Home <Link to={"/"}>here</Link>!
        </LayoutSite>
    );
}

export default Error404;
