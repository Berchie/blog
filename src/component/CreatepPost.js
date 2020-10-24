import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import '../CustomComponent.css';
import {useAppTheme} from '../stylecomponent/ThemeContext'

export const CreatePost = () => {
    
    const darkTheme = useAppTheme();
    const styleTheme = {
        backgroundColor: darkTheme ? "#e0e0e0" : "#222",
        color: darkTheme ? "#222" : "#fff",
    };
    
    return(
     <React.Fragment>
        <Container>
        <Row className="justify-content-lg-center create-post-main" style={styleTheme}>
            {/* <Col></Col> */}
            <Col>
                <h1 className="create-post-text">Create Post Page</h1>
                <form className="form-post">
                    <input className="create-form-input" type="text" placeholder="Title"/>
                    <input className="create-form-input" id="date-picker" type="date"/>
                    <input className="create-form-input" type="text" placeholder="Image URL"/>
                    <textarea className="create-form-input"  rows="10" cols="40" placeholder="Body"/>
                    <button className="submit-btn">Submit</button>
                    <button className="cancel-btn">Cancel</button>
                </form>
            </Col>
            
        </Row>
        </Container>
    </React.Fragment> 
)}