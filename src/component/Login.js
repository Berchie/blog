import React, {useState} from 'react';
import '../CustomComponent.css';
import {useAppTheme} from '../stylecomponent/ThemeContext'



export const Login = ({props}) => {
    
    const darkTheme = useAppTheme();
    const styleTheme = {
        backgroundColor: darkTheme ? "#efefef" : "#222",
        color: darkTheme ? "#444" : "#fff",
    };
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    function handleSign(event) {
        event.preventDefault();
        if (username === "berchie" && password === "agbe@20"){
            props.setLoggIned(true);
        }
    }

    return(
    <div className="login-main" style={styleTheme}>
        <p className="login-text">Sign In</p>
        <form className="login-form">
            <input className="login-input" type="text" value={username} onChange={(e => setUsername(e.target.value))} placeholder="username"/>
            <input className="login-input" type="password" value={password} onClick={(e => setPassword(e.target.value))} placeholder="password" />
            <button className="login-btn" onClick={handleSign} >Sign In</button>
        </form>
    </div>
)}