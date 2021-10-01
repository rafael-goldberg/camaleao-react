import React, {useState} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {AuthContext} from "./helpers/AuthContext";
import '../assets/css/App.css';
import '../assets/css/AppResponsive.css';
import Routes from "./routes/Routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-image-gallery/styles/css/image-gallery.css";
//import 'primeflex/primeflex.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const App = () => {
    const [authState, setAuthState] = useState({
        id: null,
        email: "",
        role: null,
        isAuthenticated: false,
    });

    return(
        <Router>
            <AuthContext.Provider value={{authState, setAuthState}}>
                <Routes/>
            </AuthContext.Provider>
        </Router>
    )
}
export default App;
