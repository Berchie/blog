import React, {useState, useContext} from 'react';
// import {Row, Col} from 'react-bootstrap';
import '../CustomComponent.css';
import {Link, useLocation} from 'react-router-dom';
import {blogContext} from '../data/BlogDataContext';
import {HandThumbsUp, HandThumbsDown} from 'react-bootstrap-icons';




export const Post = () => {
    
    const location = useLocation();
    // const history = useHistory();
    const postDeatil = useContext(blogContext);
    const [readerComment, setReaderComment] = useState("null");
    // const [upVote, setUpVote] = useState(data.vote_up);
    // const [downVote, setDownVote] = useState(data.vote_down);
    console.log(location.id);
    //getting click post using filter method of map function
    let data = (postDeatil.blogPosts.filter(e => e.id === location.id));
    const blogPost = postDeatil.blogPosts;

    let [dataCt, setDataCt] = useState(1);//use this state to update the comments on screen
    const upVoteData = data.map(v => v.vote_up)[0];
    const downVoteData = data.map(vote => vote.vote_down)[0];
    const [upVote, setUpVote] = useState(upVoteData);
    const [downVote, setDownVote] = useState(downVoteData);

    // console.log(data.map(e => e.title), dataCt, upVoteData, upVote, downVoteData, downVote);

    
    const handleUpvote= (e) => {
        e.preventDefault();
        setUpVote(upVote+1);
        // vUp = data.vote_up+1;
        postDeatil.updateVote(location.id, "upvote", upVote);
    }

    const handleDownVote = (e) => {
        e.preventDefault();
        setDownVote(downVote+1);
        postDeatil.updateVote(location.id, "downvote", downVote);
    }

    const userComment = {
        commentid: new Date().getTime(),
        text: readerComment
    }

    const addUserComment=(e)=>{
        e.preventDefault();
        postDeatil.addComment(location.id, userComment);
        setDataCt(prevDataCt => prevDataCt + 1);//use this state to update the comments on screen
    }
    
    return(
    <div className="clearfix">
        <div className="column content">
            {
                data.map((post => 
                    <div key={post.id}>
                        <img src={post.pic} alt="post-pic" style={{width:"100%", height:"auto"}} />
                        <h2>{post.title}</h2>
                        <p>{post.date}</p>
                        <p className="content-p">{post.body}</p>
                        <HandThumbsUp onClick={handleUpvote} style={{cursor:"pointer"}}/>{post.vote_up} <HandThumbsDown onClick={handleDownVote} style={{cursor:"pointer"}}/>{post.vote_down}
                        <form>
                            <textarea className="comment-input" rows="5" cols="70" placeholder="comment" value={readerComment} onChange={(e) => setReaderComment(e.target.value)}/> 
                            <button className="comment-btn" onClick={addUserComment}>Add comment</button>
                        </form>
                        <h6>Comments:</h6>
                        <hr></hr>
                        {
                            data[0].comments.map((comm, index)=> 
                                <React.Fragment key={index+1}>
                                    <p style={{fontSize:"20px", fontWeight:"normal", fontStyle:"italic"}}>{comm.text}</p>
                                    <hr className="comment-hr"></hr>
                                </React.Fragment>)
                        }
                    </div>
                ))
            } 
        </div>

        <div className="column menu">
           <p>Blog Titles</p>
            <ul>
                {
                    blogPost.map((postTiles => 
                        <li key={postTiles.id}><Link to={{pathname:`/Post/id?${postTiles.id}&title=${postTiles.title}`, id:postTiles.id}} className="link-other-post">
                            {postTiles.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>

    </div>
)}