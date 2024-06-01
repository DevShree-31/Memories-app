import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getPosts } from '../actions/post';
import {Container,Grow,Grid} from "@mui/material"
import Posts from '../Posts/Posts';
import Form from '../Form/Form' 
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const user=JSON.parse(localStorage.getItem('profile'));
    useEffect(() => {
        if(!user) navigate('/')
    },[user])
    useEffect(() => {
        if(user) dispatch(getPosts());
    }, [user]);
    return (
        <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home