import React from 'react'
import Post from './Post/Post'
import { useSelector } from 'react-redux'

const Posts = () => {
  return (
  
    <div >
        <h4>Posts</h4>
        <div>
        <Post/>
        <Post/>
        <Post/>
        </div>
        
    </div>
  )
}

export default Posts