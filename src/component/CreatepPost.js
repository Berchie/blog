import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../CustomComponent.css';

export const CreatePost = () => (
    <React.Fragment>
        <Row className="create-post-main">
            <Col lg={true}>
                <h1 className="create-post-text">Create Post Page</h1>
                <form>
                    <input className="create-form-input" type="text" placeholder="Title"/>
                    <input className="create-form-input" type="date"/>
                    <textarea className="create-form-input" rows="20" cols="60" placeholder="Body"/>
                    <button className="submit-butn">Submit</button>
                    <button className="cancel-btn">Cancel</button>
                </form>
            </Col>
        </Row>
    </React.Fragment>
)