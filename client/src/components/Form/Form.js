import React, { useEffect, useState } from 'react'
import { TextField, Button, Typography, Paper } from '@mui/material';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { createPost,updatePost } from '../actions/post';
const Form = ({currentId,setCurrentId}) => {
  const [postData, setPostData] = useState({ title: '', message: '',  selectedFile: '' });

  const dispatch = useDispatch();
  const classes = useStyles();
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const clear=()=>{
    setCurrentId(null)
    setPostData({ title: '', message: '',  selectedFile: '' })
  }
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);
  const handleSubmit=(e)=>{
    e.preventDefault();
    if (currentId ) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
      
    }
    clear()
  }
  return (
    <div>

      <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6" > {currentId?`Editing ${post.title}`: 'Creating a Post'}</Typography>

        <TextField name="title" variant="outlined" label="Title"   fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} /> 
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="medium" type="submit" margin="3">Submit</Button>
        <Button variant="contained" color="secondary" size="medium" className={classes.buttonSubmit}  >Clear</Button>
      </form>
    </Paper>
    </div>
  )
}

export default Form