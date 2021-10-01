import React from 'react';
import {Route, Switch, useRouteMatch} from "react-router-dom";
import DashContainer from "../admin/DashContainer";
import Dashboard from "../admin/Dashboard";


const AdminRoutes = () => {
    let {path} = useRouteMatch();

    return(
        <div>
            <Switch>
                <Route exact path='/admin' children={<Dashboard/>}/>
                <Route path={`${path}/:id`} children={<DashContainer/>}/>
            </Switch>
        </div>
    )
}
export default AdminRoutes;
