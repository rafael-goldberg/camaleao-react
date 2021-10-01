import React, {lazy, Suspense} from "react";
import {Switch, Route} from "react-router-dom";
import Blog from "../views/Blog";

// Components
const PrivateRoute = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import("./PrivateRoute")), 1200);
    });
});

// Pages - Common
const Error404 = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import("../views/Error404")), 1200);
    });
});
const Signin = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import("../views/Signin")), 1200);
    });
});
// Pages - Admin
const AdminRoutes = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import("../routes/AdminRoutes")), 1200);
    });
});
// Pages - Site
const Home = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import("../views/Home")), 1200);
    });
});
const Contact = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import("../views/Contact")), 1200);
    });
});
const Cart = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import("../views/Cart")), 1200);
    });
});
const Checkout = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import("../views/Checkout")), 1200);
    });
});
const Shopping = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import("../views/Shopping")), 1200);
    });
});
const blog = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import("../views/Blog")), 1200);
    });
});

const Routes = () => {
    return(
        <Suspense fallback={<div>Carregando...</div>}>
            <Switch>
                <Route exact path="/" children={<Home/>}/>
                <Route path="/contact" children={<Contact/>}/>
                <Route path="/shopping" children={<Shopping/>}/>
                <Route path="/cart" children={<Cart/>}/>
                <Route path="/checkout" children={<Checkout/>}/>
                <Route path="/blog" children={<Blog/>}/>
                <Route path="/signin" children={<Signin/>}/>
                <PrivateRoute path="/admin" children={<AdminRoutes/>}/>
                <Route path="*" children={<Error404/>}/>
            </Switch>
        </Suspense>
    )
}
export default Routes;
