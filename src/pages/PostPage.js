import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom'

const PostPage = () => {

    const {id} = useParams();
    const [post,setPost] = useState([])
    useEffect(() =>{
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(data => setPost(data))
      .catch(console.error())
    }, [id])

    return (

        <div>
            {post &&
            <div>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
                }
        </div>
      );
}
 
export{PostPage};