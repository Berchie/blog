import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import '../CustomComponent.css';
import {useAppTheme} from '../stylecomponent/ThemeContext'
import Alert from 'react-bootstrap/Alert';


export const Login = ({setLoggedIn}) => {
    
    const history = useHistory();
    const darkTheme = useAppTheme();
    const styleTheme = {
        backgroundColor: darkTheme ? "#efefef" : "#222",
        color: darkTheme ? "#444" : "#fff",
    };
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    
    function WrongAuth() {

        return(
            <Alert variant="danger" onClose={() => setShow(false)} dismissible style={{textAlign:"center"}}>
                {/* <Alert.Heading> */}
                    <p>Wrong Username and Password!</p>
                {/* </Alert.Heading> */}
            </Alert>
        );
        
    }

    function handleSign(event) {
        event.preventDefault();
        if (username === "berchie" && password === "agbe@20"){
            setLoggedIn(true);
            history.push({pathname:"/"})
        } else {
            setShow(true);
        }
    }

    return(
    <>
        {show && <WrongAuth />}
        <div className="login-main" style={styleTheme}>
            <p className="login-text">Sign In</p>
            <form className="login-form">
                <input className="login-input" type="text" value={username} onChange={(e => setUsername(e.target.value))} placeholder="username"/>
                <input className="login-input" type="password" value={password} onChange={(e => setPassword(e.target.value))} placeholder="password" />
                <button className="login-btn" onClick={handleSign} >Sign In</button>
            </form>
        </div>
    </>
)}