import React, {useState} from 'react';
import {Row, Col} from 'react-bootstrap';
import '../CustomComponent.css';
import {blogposts} from '../data/BlogPosts';
import {Link, useLocation} from 'react-router-dom';
import { useAppTheme} from '../stylecomponent/ThemeContext';
import {HandThumbsUp, HandThumbsDown} from 'react-bootstrap-icons';




export const Post = (props) => {
    
    const location = useLocation();
    const [readerComment, setReaderComment] = useState("");
    const [upVote, setUpVote] = useState(0);
    const [downVote, setDownVote] = useState(0);

    function commentHandler(event) {
        event.preventDefault();
    }

    const handleUpvote= (e) => {
        e.preventDefault();
        setUpVote(prevUpvote => prevUpvote + 1);
    }

    const handleDownVote = (e) => {
        e.preventDefault();
        setDownVote(prevDownVote => prevDownVote + 1);
    }

    console.log(location.id);
    const blogPost = blogposts.filter((post => post.id === location.id));
    
    return(
    <div className="clearfix">
        <div className="column content">
            {
                blogPost.map((post => 
                    <>
                        <h2>{post.title}</h2>
                        <p className="content-p">{post.body}</p>
                        {/* <hr></hr> */}
                        {/* add upvote, downvote */}
                        <p><HandThumbsUp onClick={handleUpvote}/>{upVote} <HandThumbsDown onClick={handleDownVote}/>{downVote}</p>
                        <hr></hr>
                        <p className="content-p">comments</p>
                        <hr></hr>
                        <form>
                            <textarea className="comment-input" rows="5" cols="70" placeholder="comment" value={readerComment} onChange={(e) => setReaderComment(e.target.value)}/> 
                            <button className="comment-btn">Add comment</button>
                        </form>
                    </>
                ))
            } 
        </div>

        <div className="column menu">
           <p>Blog Titles</p>
            <ul>
                {
                    blogposts.map((postTiles => 
                        <li><Link to={{pathname:"/Post", id:postTiles.id}} className="link-other-post">
                            {postTiles.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>

    </div>
)}