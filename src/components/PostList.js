import React from "react";
import {Link} from 'react-router-dom'

const PostList = ({filteredData}) =>{
    return(
        filteredData.map((post) =>
            <li className='Stories-Li' key={post.id}>
                <Link className='Stories-Link' to={`/posts/${post.id}`}> - {post.title}</Link>
            </li>)
    )
}

export {PostList};