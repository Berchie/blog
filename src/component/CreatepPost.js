import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import '../CustomComponent.css';

export const CreatePost = () => (
     <React.Fragment>
        <Container>
        <Row className="justify-content-lg-center create-post-main">
            {/* <Col></Col> */}
            <Col>
                <h1 className="create-post-text">Create Post Page</h1>
                <form className="form-post">
                    <input className="create-form-input" type="text" placeholder="Title"/>
                    <input className="create-form-input" id="date-picker" type="date"/>
                    <textarea className="create-form-input"  rows="10" cols="40" placeholder="Body"/>
                    <button className="submit-btn">Submit</button>
                    <button className="cancel-btn">Cancel</button>
                </form>
            </Col>
            
        </Row>
        </Container>
    </React.Fragment> 
)