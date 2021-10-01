import React from "react";

const Breadcrumb = (props) => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light sidebarCollapse">
            <div className="container-fluid">
                <button type="button" id="sidebarCollapse" onClick={props.toggleSidebar}
                        className="btn text-sidebar bg-secondary shadow-none">
                    <i className="fas fa-align-left"/>
                    <span/>
                </button>
            </div>
        </nav>
    )
}
export default Breadcrumb;
