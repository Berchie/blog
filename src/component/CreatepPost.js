import React,{useContext, useState} from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import '../CustomComponent.css';
import {useAppTheme} from '../stylecomponent/ThemeContext'
import {blogContext} from '../data/BlogDataContext';
import {useHistory} from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

export const CreatePost = () => {

    const newPost = useContext(blogContext);
    const history = useHistory();
    const darkTheme = useAppTheme();
    const styleTheme = {
        backgroundColor: darkTheme ? "#e0e0e0" : "#222",
        color: darkTheme ? "#222" : "#fff",
    };
    
    // const newPost = useContext(blogContext);
    console.log(newPost.blogPosts)

    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [body, setBody] = useState("");
    const [show, setShow] = useState(false);

    function AlertInputFieldEmpty() {
        

        return(

            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                    How can you post a blog with Title, Date or Context. Check again before you post!!!
                    Title, Date, and Body should be provided before you can submit your post. Thank you.
                </p>
            </Alert>
        );
        
    }

    function newPostHistory() {
        history.push({pathname:"/Blog"});
    }

    const handleTitle = (e) => {
        setTitle(e.target.value);
        console.log(title)
    }

    const handleDate = (e) => {
        setDate(e.target.value);
        console.log(date)
    }

    const handleImage = (e) => {
        setImgUrl(e.target.value);
        console.log(imgUrl)
    }

    const handleBody = (e) => {
        setBody(e.target.value);
        console.log(body)
    }

    const handleNewPost = (e) => {
        e.preventDefault();

        if (title === "" && date === "" && body === ""){
            setShow(true);
        } else{
            newPost.addBlogPost(newPostData);
            newPostHistory();
            console.log([...newPost.blogPosts,newPostData]);
        }
        
    }

    let newPostData = {
        id: new Date().getTime(),
        title: title,
        date: date,
        pic: imgUrl,
        body: body,
        vote_up: 0,
        vote_down: 0,
        comments: [
        ] 
    }
    
    return(
     <React.Fragment>
        <Container>
        {show && <AlertInputFieldEmpty/>}
        <Row className="justify-content-lg-center create-post-main" style={styleTheme}>
            {/* <Col></Col> */}
            <Col>
                <h1 className="create-post-text">Create Post Page</h1>
                <form className="form-post">
                    <input className="create-form-input" type="text"  value={title} onChange={handleTitle} placeholder="Title"/>
                    <input className="create-form-input" id="date-picker" value={date} onChange={handleDate} type="date"/>
                    <input className="create-form-input" type="text" onChange={handleImage} placeholder="Image URL"/>
                    <textarea className="create-form-input"  rows="10" cols="40" onChange={handleBody} placeholder="Body"/>
                    <button className="submit-btn" onClick={handleNewPost}>Submit</button>
                </form>
            </Col>
            
        </Row>
        </Container>
    </React.Fragment> 
)}