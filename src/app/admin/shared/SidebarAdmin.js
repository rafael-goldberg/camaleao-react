import React from "react";
import MenuLink from "../../components/MenuLink";
import AccordionSidebar from "../../components/AccordionSidebar";
import {Link} from "react-router-dom";

const SidebarAdmin = (props) => {
    return(
        <nav id="sidebar" className={props.showSidebar ? 'bg-light active':'bg-light'}>
            <div className="sidebar-header border-bottom">
                <h3>Admin Area</h3>
            </div>
            <ul className="list-unstyled components">
                <li><MenuLink to={`/admin`} label="Dashboard" activeOnlyWhenExact={true}/></li>
                <li className="dropdownSidebar">
                    <AccordionSidebar title="Registrations">
                        <ul className={'list-unstyled'}>
                            <li><MenuLink to={`/admin/reg-categories`} label="Categories" activeOnlyWhenExact={true} className='text-white'/></li>
                        </ul>
                    </AccordionSidebar>
                </li>
            </ul>
            <ul className="list-unstyled ctas">
                <li>
                    <Link to="#" className="download">Download source</Link>
                </li>
                <li>
                    <Link to="#" className="article">Back to article</Link>
                </li>
            </ul>
        </nav>
    )
}
export default SidebarAdmin;
