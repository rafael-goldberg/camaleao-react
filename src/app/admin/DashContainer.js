import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import LayoutAdmin from "../layouts/LayoutAdmin";
import '../../assets/css/DashContainer.css';
import Categories from "./views/categories/Categories";

const DashContainer = () => {
    let {id} = useParams();

    return(
        <LayoutAdmin>
            {id === "reg-categories" && <Categories/>}
        </LayoutAdmin>
    )
}

export default DashContainer;
