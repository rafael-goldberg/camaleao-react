import React, {useEffect, useState} from 'react';
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
// Chatbot
import { BlipChat } from "blip-chat-widget";

const App = () => {
    const [authState, setAuthState] = useState({
        id: null,
        email: "",
        role: null,
        isAuthenticated: false,
    });
    const Chatbot = new BlipChat();

    useEffect(() => {
        window.onload = function () {
            let customStyle = `
            #message-input {
              box-sizing: border-box;
              border-radius: 0 0 6px 6px;
              border-left: 1px solid #E6E6E6;
              border-bottom: 1px solid #E6E6E6;
              border-right: 1px solid #E6E6E6;
            }
            #message-input textarea {
              font-size: 12px;
              color: white;
            }`

            Chatbot
                .withCustomStyle(customStyle)
                .withTarget('chat')
                .withAppKey('ZmFxNTI6NmU4MGVmZjctODlkOC00NzUwLWIyMDctNzQwZTAzZWZiODE5')
                .withButton({"color":"#6C757D","icon":"https://res.cloudinary.com/rafaelgoldberg-digital/image/upload/v1637163639/icones/bot-icon_cdrvcz.png"})
                .withCustomCommonUrl('https://rafael-amaral-goldberg-h50rq.chat.blip.ai/')
                .withEventHandler(BlipChat.ENTER_EVENT, function () {
                    console.log('enter')
                })
                .withEventHandler(BlipChat.LEAVE_EVENT, function () {
                    console.log('leave');
                })
                .withEventHandler(BlipChat.LOAD_EVENT, function () {
                    console.log('chat loaded');
                })
                .build();
        }
    },[]);

    return(
        <Router>
            <AuthContext.Provider value={{authState, setAuthState}}>
                <Routes/>
            </AuthContext.Provider>
        </Router>
    )
}
export default App;
