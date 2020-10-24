import React from 'react';
import {Row, Col} from 'react-bootstrap';
import '../CustomComponent.css';
import {blogposts} from '../data/BlogPosts';
import {Link} from 'react-router-dom';
import { useAppTheme} from '../stylecomponent/ThemeContext';
// import { Post } from './Post';

export const Home = () => { 

    const darkTheme = useAppTheme();
    const styleTheme = {
        backgroundColor: darkTheme ? "#fff" : "#333",
        color: darkTheme ? "#333" : "#fff",
    };
    
    // const [countPost, setCountPost] = useState(0);
    //put the blogpost in state to track for new blog or state
    // blogposts.reverse();

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