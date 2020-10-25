import React from 'react'

export const blogContext = React.createContext();

const  blogPosts = [
  {
    id: 1603194605888,
    title: "A blonde and a brunette were talking one day",
    date: "20/10/2020",
    pic: "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
    body: "A blonde and a brunette were talking one day. The brunette saidthat her boyfriend had a slight dandruff problem but she gave him \"Headand Shoulders\" and it cleared it up. The blonde asked inquisitively,\"How do you give shoulders?\"",
    vote_up: 7,
    vote_down: 2,
    comments: [
            {
                commentid: 1603194999795, 
                text:"like seriously?...."
            }
    
    ] 
  },

  {
    id: 1603194999795,
    title: "imigration test",
    date: "20/10/2020",
    pic: "https://s.yimg.com/ny/api/res/1.2/12UU2JphAsbxTTDca.7QFQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9MTA4MDtoPTcxNg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2019-11/7b5b5330-112b-11ea-a77f-7c019be7ecae",
    body: "You know how they use to give immigrants a test when they came to America? Well the last question on the test was to use pink, green and yellow in a sentence. So when the Mexican had his turn he answered the last question: \"When the phone goes 'GREEN GREEN GREEN' I PINK it up and say 'YELLOW?",
    vote_up: 15,
    vote_down: 4,
    comments: [
            {
                commentid: 1603194999795, 
                text:"lol...."
            },
    ]
  },

  {
    id: 1603195050560,
    title: "Bill Clinton, Bill Gates, and Al Gore crash",
    date: "20/10/2020",
    pic: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    body: "Bill Clinton, Bill Gates, and Al Gore were in an airplane that crashed. Now they're in heaven, and God is sitting on the great golden throne. God addresses Al first. \"Al, what do you believe in?\" Al replies, \"Well, I believe that the internal combustion Engine is the root of all evil and that we need to save the world from CFCs and that if any more freon is used, the whole earth will become a greenhouse and we'll all die.\" God thinks for a second and says, \"Okay, I can live with that. Come and sit at my left.\" God then addresses Bill Clinton. \"Bill, what do you believe in?\" Bill Clinton replies, \"Well, I believe in power to the people. I think people should be able to make their own choices about things, and that no one should ever be able to tell someone else what to do. I also believe in feeling people's pain, but not inhaling.\" God thinks for a second and says, \"Okay, that sounds good. Come and sit at my right.\" God then addresses Bill Gates. \"Bill Gates, what do you believe in?\" Bill Gates said, \"I believe you're in my chair.\"",
    vote_up: 6,
    vote_down: 2,
    comments: [
            {
                commentid: 1603195050560,
                text:"hahaha....Oh! Bill Gate"
            }
    ]
  }]

// export function useBlogContext() {

// }
function updateVote(postId, VoteT,vote) {
  for (let i in blogPosts) {
      if (blogPosts[i].id === postId) {
          if (VoteT === "upvote") {
              blogPosts[i].vote_up = vote;
          } else {
              blogPosts[i].vote_down = vote;
          }
      }
  }
}

// let userCommentData = null;
// let allComments =null;

function addComment(blogId, uComment) {
   for (const c in blogPosts) {
     if (blogPosts[c].id === blogId) {
       blogPosts[c].comments = [...blogPosts[c].comments, uComment];
       console.log(blogPosts[c].comments, "id:",blogId);
     }
   }

}

function addBlogPost(newPost) {
    blogPosts.unshift(newPost);  
}

export let providerData = {
  blogPosts,
  updateVote,
  addComment,
  addBlogPost
}

function BlogProvider({children}){

  return(
      <blogContext.Provider value = {providerData}>
        {children}
      </blogContext.Provider>
  )
}

function BlogPostContext (){
  const context = React.useContext(blogContext);
  if (context === undefined) {
    throw new Error('useCountState must be used within a CountProvider');
  }
  return context;
}

export {BlogPostContext , BlogProvider};