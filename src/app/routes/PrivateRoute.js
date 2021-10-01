import React, {useContext} from "react";
import {AuthContext} from "../helpers/AuthContext";
import {Redirect, Route} from "react-router-dom";

const PrivateRoute = ({children, ...rest}) => {
    const { authState } = useContext(AuthContext);

    return(
        <Route {...rest} render={({location}) =>
            authState.isAuthenticated === true ? children :
                <Redirect to={{
                    pathname: "/signin",
                    state: {from: location}
                }}/>
        }/>
    )
}
export default PrivateRoute;
