import React,{useState,useEffect,useRef} from 'react';
import {useNavigate, useParams,} from 'react-router-dom'

const PostPage = () => {
  const LoadingRef = useRef();
  const {id} = useParams();
  const [post,setPost] = useState([])
  useEffect(() =>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(data => { setTimeout(() => {
      LoadingRef.current.style.opacity='0';
      setPost(data)}
      ,500
    )})
    .catch(console.error())
  }, [id])
  const navigateBack = useNavigate();
  const goBack = () => navigateBack(-1)
  return (

      <div>
          {post &&
          <div className='post-wrapper'>
            <div className='post-goBack_wrapper'><button onClick={goBack} className='post-goBack'> ← Go back </button></div>
            
            <h1 ref={LoadingRef}>Loading . . .</h1>
            <h1 className='post-title'>{post.title}</h1>
            <p className='post-info'>{post.body}</p>
          </div>
              }
      </div>
    );
}
 
export{PostPage};