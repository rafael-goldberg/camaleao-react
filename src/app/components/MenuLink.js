import React from "react";
import {Link, useRouteMatch} from "react-router-dom";

function MenuLink({label, to, activeOnlyWhenExact, className}) {
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
    });

    return(
        <Link to={to} className={match ? `nav-item nav-link active ${className}` : `nav-item nav-link ${className}`}>
            {match && "> "}
            {label}
        </Link>
    )
}
export default MenuLink;
