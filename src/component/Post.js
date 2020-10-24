import React, {useState, useContext} from 'react';
// import {Row, Col} from 'react-bootstrap';
import '../CustomComponent.css';
import {Link, useLocation, useHistory} from 'react-router-dom';
import {blogContext, providerData} from '../data/BlogDataContext';
import {HandThumbsUp, HandThumbsDown} from 'react-bootstrap-icons';




export const Post = () => {
    
    const location = useLocation();
    const history = useHistory();
    const postDeatil = useContext(blogContext);
    const [readerComment, setReaderComment] = useState("null");
    const [upVote, setUpVote] = useState(0);
    const [downVote, setDownVote] = useState(0);
    const [voteType, setVoteType] = useState("");
    
    //getting click post using filter method of map function
    const data = (postDeatil.blogPosts.filter(e => e.id == location.id));
    const comments = data.map( comment => comment.comments);
    const blogPost = postDeatil.blogPosts;

    console.log(data);

    const handleUpvote= (e) => {
        e.preventDefault();
        setUpVote(prevUpvote => prevUpvote + 1);
        setVoteType("upvote");
        postDeatil.updateVote(location.id, voteType, upVote);
        // setUpVote(0);
        // udpateVote(location.id, voteType);
    }

    const handleDownVote = (e) => {
        e.preventDefault();
        setDownVote(prevDownVote => prevDownVote + 1);
        setVoteType("downvote");
        postDeatil.updateVote(location.id, setVoteType, downVote);
        // setDownVote(0);
        // udpateVote(location.id, voteType);
    }

    const addUserComment=(e)=>{
        e.preventDefault();

        // if (readerComment === "") {
            providerData.addComment(location.id, userComment);
            console.log(providerData.addComment(location.id, userComment))
            // console.log(location.id, userComment);
            // console.log(comments.push(userComment));
            // console.log(comments);
            
        // }

    }

    const userComment = {
        commentid: new Date().getTime(),
        text: readerComment
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
                        {/* <hr></hr> */}
                        {/* add upvote, downvote */}
                        <p><HandThumbsUp onClick={handleUpvote}/>{post.vote_up} <HandThumbsDown onClick={handleDownVote}/>{post.vote_down}</p>
                        <hr></hr>
                        <p className="content-p">{post.comments["text"]}</p>
                        {
                            comments.map((comm, index) => <p key={comm[index].commentid}>{comm[index].text}</p>)
                        }
                        <hr></hr>
                        <form>
                            <textarea className="comment-input" rows="5" cols="70" placeholder="comment" value={readerComment} onChange={(e) => setReaderComment(e.target.value)}/> 
                            <button className="comment-btn" onClick={addUserComment}>Add comment</button>
                        </form>
                    </div>
                ))
            } 
        </div>

        <div className="column menu">
           <p>Blog Titles</p>
            <ul>
                {
                    blogPost.map((postTiles => 
                        <li key={postTiles.id} onClick={()=> history.push({pathname:`/Post/id?${postTiles.id}&title=${postTiles.title}`, id:postTiles.id})}><Link to={{pathname:`/Post/id?${postTiles.id}&title=${postTiles.title}`, id:postTiles.id}} className="link-other-post">
                            {postTiles.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>

    </div>
)}