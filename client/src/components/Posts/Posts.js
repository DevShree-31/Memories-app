import React from 'react'
import Post from './Post/Post'
import { useSelector } from 'react-redux'
import useStyle from './style'
import { CircularProgress, Grid } from '@mui/material'
const Posts = ({setCurrentId}) => {
  const posts=useSelector((state)=>state.posts);
  const classes=useStyle();
  return (
    !posts?<CircularProgress/>:(
      <Grid container className={classes.container} spacing={3}>
        {posts.map((post)=><Grid key={post._id} item xs={12} sm>
          <Post post={post} setCurrentId={setCurrentId}/>
        </Grid>)}
      </Grid>
    )
  )
}

export default Posts