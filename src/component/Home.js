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
                <Row className="home-main" lg={true} style={styleTheme}>
                <Col key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{(post.body).slice(0, 310)}...<span><Link to= {{pathname:"/Post", id:post.id}} >Read more</Link></span></p>
                </Col>
                </Row>
            ))
        }

        <Row className="home-main" lg={true}>
            <Col lg={true}>
                <h1>Home Page</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the 
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with 
                    the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
                    software like Aldus PageMaker including versions of Lorem Ipsum
                </p>
            </Col>
        </Row>

        <Row className="home-main">
            <Col>
                <h1>Where does it come from?</h1>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature 
                    from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, 
                    looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of 
                    the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 
                    of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise 
                    on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", 
                    comes from a line in section 1.10.32.
                </p>    
                </Col>
        </Row>
        <Row className="home-main">
            <Col>
            <h1>Why do we use it?</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
                    content here', making it look like readable English.
                </p>    
            </Col>
        </Row>
    </React.Fragment>
)}