import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import {Card,CardActions,CardContent,CardMedia,Button,Typography} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import moment from 'moment'
import useStyle from './style'
import { deletePost } from '../../actions/post'
import { useDispatch } from 'react-redux'
const Post = ({post,setCurrentId}) => {
  const classes=useStyle()
  const dispatch=useDispatch()
  return (
    <Card  className={classes.card} >
      <CardMedia  className={classes.media}  component='img' height='100' alt='Card' image={post.selectedFile} title={post.title}/>
      <div className={classes.overlay}>
        <Typography variant='body2' style={{color:'white'}}>{moment(post.createdAt).fromNow()}</Typography>
        </div>
      <div className={classes.overlay2}>
      <Button style={{color:'white'}} size='small' onClick={()=>setCurrentId(post._id)} ><MoreHorizIcon/></Button>
      </div>
      <Typography variant='h6' className={classes.title} gutterBottom>{post.title}</Typography>
      <CardContent >
        <Typography variant='body2' component='p' color='gray' gutterBottom>{post.message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
      <Button size='small' color='primary' onClick={()=>{}}>
        <DeleteIcon style={{left:'0px'}} onClick={()=>{dispatch(deletePost(post._id))}} fontSize='small'/>
      </Button>
      </CardActions>
    </Card>
  )
}

export default Post