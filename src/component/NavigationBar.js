import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';

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

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg" >
            <Navbar.Brand href="/">Express</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/Blog">Blog</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/CreatePost">New Post</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/Login">Login</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)