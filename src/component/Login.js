import React from 'react';
import '../CustomComponent.css';

export const Login = () => (
    <div className="login-main">
        <p className="login-text">Sign In</p>
        <form className="login-form">
            <input className="login-input" type="text" placeholder="username"/>
            <input className="login-input" type="password" placeholder="password" />
            <button className="login-btn" >Sign In</button>
        </form>
    </div>
)