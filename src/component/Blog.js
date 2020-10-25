import React, { useContext } from 'react';
import {blogContext} from '../data/BlogDataContext';
import {Link} from 'react-router-dom';
import '../CustomComponent.css';
import { Row, Col } from 'react-bootstrap';



export const Blog = () => {
    // const history = useHistory();

    //Using useContent Hook for function component.
    //I don't need to use the "Context.Consumer"
    const postContext = useContext(blogContext);

    //geting the blogposts data that was passed from the context provider
    const post = postContext.blogPosts; 
    // let postid = null;
    
    // function postHistory(e) {
    //     e.preventDefault();
    //     postid = e.target.value;
    //     history.push({pathname:"/Post", id:postid});
    //     console.log(postid);
    // }

    console.log(post.map( e => e.title));

    return(
        <React.Fragment>
            {post.map((p =>
                <Row className="blog-container" key={p.id}>
                <Col className="polaroid">
                    <img src={p.pic} alt="post-pic" className="post-img" style={{width:"100%", height:"auto"}} />
                    <div className="text-container">
                        <h1 style={{fontSize:"30px", fontStyle:"oblique", fontWeight:"bold"}}>{p.title}</h1>
                        <p style={{fontSize:"13px", fontStyle:"italic", fontWeight:"bold"}}>Date: {p.date}</p>
                        <p>{(p.body).slice(0, 310)}...</p>
                        <Link to={{pathname:`/Post/id?${p.id}&title=${p.title}`, id:p.id}} ><button className="btn-blog">Read more</button></Link>
                    </div>
                </Col>
                </Row>))}
        </React.Fragment>
    )
    
}