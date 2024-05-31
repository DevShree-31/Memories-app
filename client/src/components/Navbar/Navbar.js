import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useStyles from './styles';
import { IMAGE_URL } from '../../utils/urls';
import { useDispatch } from 'react-redux';


const Navbar = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const location=useLocation()
  const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')));
    const classes = useStyles();
    console.log(user)
    useEffect(()=>{
      const token=user?.tokenId
      setUser(JSON.parse(localStorage.getItem('profile')))
    },[location])
    const logOut=()=>{
      dispatch({type:'LOGOUT'})
      navigate('/')
      setUser(null)
    }
  return (
    
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.flexAll}>
      <div className={classes.brandContainer}>
        <Typography component={Link} to="/" className={classes.heading} variant="h2" >Memories</Typography>
        <img className={classes.image} src={IMAGE_URL} alt="icon" height="60" />
      </div>
      <Toolbar className={classes.toolbar}>
        {
            user?(
            <div className={classes.profile}>
                <Avatar className={classes.purple} alt={user?.result?.name} src={user?.result?.imageUrl}>{user?.result?.name.charAt(0)}</Avatar>
                <Typography className={classes.userName} variant="h6">{user?.result?.name}</Typography>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logOut}>Logout</Button>
            </div>
            ):(
                <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
            )
        }
        
      </Toolbar>
      </div>
    </AppBar>

  )
}

export default Navbar