import React from 'react';
import Container from 'react-bootstrap/Container';
// import {useAppTheme} from './ThemeContext';

export const Layout = (props) => {
    
    // const darkTheme = useAppTheme();
    // const styleTheme = {
    //     backgroundColor: darkTheme ? "#fff" : "#333",
    //     color: darkTheme ? "#333" : "#fff"
    // } 
    return(
    <Container flud = "true">
        {props.children}
    </Container>
)}