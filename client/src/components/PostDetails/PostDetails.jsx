import React, { useEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useNavigate } from 'react-router-dom';

import { getPost } from '../../components/actions/post';
import useStyles from './styles';

const Post = () => {
    const {post} = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const classes = useStyles();
    const { id } = useParams();
    useEffect(() => {
        dispatch(getPost(id));
    }, [id]);
    if (!post) return null;
    return (
        <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
            <div className={classes.card}>
                <div className={classes.section}>
                <div >
                    <Typography variant="h3" component="h2">Title:{post.title}</Typography>
                    <Typography gutterBottom variant="body1" component="p" >{post.message}</Typography>
                    <Typography variant="body1">Created:{moment(post.createdAt).fromNow()}</Typography>
                </div>
                </div>
                <div className={classes.imagediv}>
                <div>
                    <img className={classes.media} src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
                </div>
                </div>
            </div>
        </Paper>
    );
};

export default Post;