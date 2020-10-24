import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';
import { useThemeToggle } from '../stylecomponent/ThemeContext';
import {Link} from 'react-router-dom';
// import {darkThemeNav, lightThemeNav} from '../stylecomponent/customTheme';


const Styles = styled.div`
    .navbar{
        background-color: #222;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;

        &:hover{
            color: #fff;
        }
    }
`;

const Button = styled.button`
    border: none;
    border-radius: 5px;
    outline: none;
    background-color: #222;
    color: #bbb;

    &:hover{
        color: #fff;
    }
    &:focus{
        outline: none;
    }
`;



export const NavigationBar = (props) => { 
    const toggleTheme = useThemeToggle();

    const logOut =(e)=>{
        e.preventDefault();
        props.setLoggedIn(false);
    }

    return(
    <Styles>
        <Navbar expand="lg">
            <Link className="navbar-brand" to = "/">Express</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Link className="nav-link" to="/">Home</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className="nav-link" to="/Blog">Blog</Link>
                    </Nav.Item>
                    <Nav.Item>
                        {props.loggedIn && <Link className="nav-link" to="/CreatePost">New Post</Link>}
                    </Nav.Item>
                    <Nav.Item>
                        {!props.loggedIn && <Link className="nav-link" to="/Login">Login</Link>}
                    </Nav.Item>
                    {props.loggedIn&& <Button onClick={logOut}>Logout</Button>}
                    <Button onClick={toggleTheme}>Theme</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)}