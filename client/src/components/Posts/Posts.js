import React from 'react'
import Post from './Post/Post'
import { useSelector } from 'react-redux'
import useStyle from './style'
import { CircularProgress, Grid } from '@mui/material'
const Posts = ({setCurrentId}) => {
  const user=JSON.parse(localStorage.getItem('profile'))
  const email=user?.result?.email
  const posts=useSelector((state)=>state.posts);
  const classes=useStyle();
  let postsArray=[]
  if(posts!=null ||posts!=undefined){
    postsArray = Object?.values(posts);
  }
  const relPost=postsArray?.filter((post)=>post?.email==email)

  return (
    relPost.length<0?<CircularProgress/>:(
      <Grid container className={classes.container} spacing={3}>
        {relPost.map((post)=><Grid key={post._id} item xs={12} sm>
          <Post post={post} setCurrentId={setCurrentId}/>
        </Grid>)}
      </Grid>
    )
  )
}

export default Posts