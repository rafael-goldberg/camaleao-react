import React, {useContext, useState} from 'react';
import '../../assets/css/LayoutAdmin.css';
import TopNavbarAdmin from "../admin/shared/TopNavbarAdmin";
import SidebarAdmin from "../admin/shared/SidebarAdmin";
import Breadcrumb from "../admin/components/Breadcrumb";
import {AuthContext} from "../helpers/AuthContext";
import {Redirect} from "react-router-dom";


const LayoutAdmin = (props) => {
    const {authState} = useContext(AuthContext);
    const [state, setState] = useState({
        showSidebar: false,
    });

    const toggleSidebar = () => {
        setState({showSidebar: !state.showSidebar})
    }

    if (authState.role > 2) return <Redirect to={"/"}/>
    return(
        <div id='layoutAdmin'>
            <TopNavbarAdmin toggleSidebar={toggleSidebar}/>
            <div className="wrapper">
                <SidebarAdmin showSidebar={state.showSidebar}/>
                <main id="content">
                    <Breadcrumb toggleSidebar={toggleSidebar}/>

                    <div>{props.children}</div>
                </main>
            </div>
        </div>
    )
}
export default LayoutAdmin;
