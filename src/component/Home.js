import React, {useContext} from 'react';
import {Row, Col} from 'react-bootstrap';
import '../CustomComponent.css';
import {Link} from 'react-router-dom';
import { useAppTheme} from '../stylecomponent/ThemeContext';
import { blogContext } from "../data/BlogDataContext";

export const Home = () => { 

    const blogcontext = useContext(blogContext);
    const darkTheme = useAppTheme();
    const styleTheme = {
        backgroundColor: darkTheme ? "#fff" : "#333",
        color: darkTheme ? "#333" : "#fff",
    };
    
    const blogposts = blogcontext.blogPosts;


    return(
    <React.Fragment>
        
        {
            blogposts.map((post =>
                <Row className="home-main" lg={true} style={styleTheme} key={post.id}>
                <Col key={post.id}>
                    <h2>{post.title}</h2>
                    <p style={{fontSize:"13px", fontStyle:"italic", fontWeight:"bold"}}>Date: {post.date}</p>
                    <p>{(post.body).slice(0, 250)}...<span><Link to= {{pathname:"/Post", id:post.id}} >Read more</Link></span></p>
                </Col>
                </Row>
            ))
        }
    </React.Fragment>
)}