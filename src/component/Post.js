import React, {useEffect, useState} from 'react';
// import {Row, Col} from 'react-bootstrap';
import '../CustomComponent.css';
import {blogposts} from '../data/BlogPosts';
import {Link, useLocation, useHistory} from 'react-router-dom';
// import { useAppTheme} from '../stylecomponent/ThemeContext';
import {HandThumbsUp, HandThumbsDown} from 'react-bootstrap-icons';




export const Post = (props) => {
    
    const location = useLocation();
    const history = useHistory();
    const [readerComment, setReaderComment] = useState("");
    const [upVote, setUpVote] = useState(0);
    const [downVote, setDownVote] = useState(0);
    const [voteType, setVoteType] = useState(null);
    const blogPost = blogposts.filter((post => post.id === location.id)); //getting click post using filter method of map function
    const comments = blogPost.map( comment => comment.comments);

    // function historyArtice(e) {
    //     e.preventDefault();
    //     history.push({
    //         pathname: "/Post",
    //         id: {}
    //     })
    // }

    const handleUpvote= (e) => {
        e.preventDefault();
        setUpVote(prevUpvote => prevUpvote + 1);
        // setVoteType("upvote");
        // udpateVote(location.id, voteType);
    }

    const handleDownVote = (e) => {
        e.preventDefault();
        setDownVote(prevDownVote => prevDownVote + 1);
        // setVoteType("downvote");
        // udpateVote(location.id, voteType);
    }

//    function udpateVote(postId, voteT) {
//        for (const i in blogposts) {
//            if (blogposts[i].id === postId) {
//                if (voteT === "upvote") {
//                    blogposts[i].vote_up = upVote;
//                } else {
//                    blogposts[i].vote_down = downVote;
//                }
//                break; //stop this loop, I found it!
//            }
//        }
//    }

   useEffect(()=>{
    //    udpateVote(location.id, voteType);
        blogPost.vote_up += upVote; 
   },[upVote])
    // console.log(location.id);
    
    
    return(
    <div className="clearfix">
        <div className="column content">
            {
                blogPost.map((post => 
                    <div key={post.id}>
                        <img src={""} alt="" />
                        <h2>{post.title}</h2>
                        <p>{post.date}</p>
                        <p className="content-p">{post.body}</p>
                        {/* <hr></hr> */}
                        {/* add upvote, downvote */}
                        <p><HandThumbsUp onClick={handleUpvote}/>{blogPost.vote_up} <HandThumbsDown onClick={handleDownVote}/>{blogPost.vote_down}</p>
                        <hr></hr>
                        <p className="content-p">{post.comments["text"]}</p>
                        {
                            comments.map((comm, index) => <p key={comm[index].commentid}>{comm[index].text}</p>)
                        }
                        <hr></hr>
                        <form>
                            <textarea className="comment-input" rows="5" cols="70" placeholder="comment" value={readerComment} onChange={(e) => setReaderComment(e.target.value)}/> 
                            <button className="comment-btn">Add comment</button>
                        </form>
                    </div>
                ))
            } 
        </div>

        <div className="column menu">
           <p>Blog Titles</p>
            <ul>
                {
                    blogposts.map((postTiles => 
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