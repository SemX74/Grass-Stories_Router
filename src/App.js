import './App.css';

import React,{useEffect, useState} from 'react';
import { Routes, Route, Link } from "react-router-dom";

import { Layout } from './components/Layout';

import { Home } from './pages/Home';
import { Posts } from './pages/Posts';
import { About } from './pages/About';
import { PostPage } from './pages/PostPage';

const App = () => {

  const [posts,setPosts] = useState([])
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => setPosts(data))
    .catch(console.error())
  }, [])

  return(
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route  index element={<Home />}/>
        <Route  path='/posts' element={<Posts posts={posts}/>}/>
        <Route  path='/posts/:id' element={<PostPage/>}/>
        <Route   path='/about' element={<About />}/>
      </Route>

    </Routes>
  )
}

export {App};
