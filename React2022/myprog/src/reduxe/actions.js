import { CREATE_POST, FETCH_POSTS } from "./types";

export function createPost(post){
return{
    type:CREATE_POST,
    payload:post
}
}

export function fetchPosts(){
    return async dispatch =>{
        const response = await fetch('https://api.jsonbin.io/b/62738a90019db467969628e1')
        const json = await response.json()
        dispatch({type:FETCH_POSTS,payload:json})
    }
}