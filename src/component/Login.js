import React from 'react';
import '../CustomComponent.css';
import {useAppTheme} from '../stylecomponent/ThemeContext'
export const Login = () => {
    
    const darkTheme = useAppTheme();
    const styleTheme = {
        backgroundColor: darkTheme ? "#efefef" : "#222",
        color: darkTheme ? "#444" : "#fff",
    };

    return(
    <div className="login-main" style={styleTheme}>
        <p className="login-text">Sign In</p>
        <form className="login-form">
            <input className="login-input" type="text" placeholder="username"/>
            <input className="login-input" type="password" placeholder="password" />
            <button className="login-btn" >Sign In</button>
        </form>
    </div>
)}