import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchPosts } from "../reduxe/actions";
import Post from "./Post";







export default function () {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.fetchedPosts);

  if (!posts.length) {
    return <button onClick={() => dispatch(fetchPosts())} className="btn btn-primary">Загрузить</button>;
  }

  let arr= []

  
  for(let i=0;i<posts.length;i++){
    if(posts[i].complexity>=5){
     arr.push(posts[i])
    }

    
  
  }
    return arr.map(post => <Post post={post} key={post.id} />);
  
  

  
}

