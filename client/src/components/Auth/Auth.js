import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import useStyles from './styles'
import { Avatar, Button, Grid, Paper, Typography } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { Container } from '@mui/system'
import {GoogleLogin} from 'react-google-login'
import Input from './Input'
import Icon from './Icon'
import {gapi} from 'gapi-script'
import { signin, signup } from '../actions/auth'
const Auth = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const classes=useStyles()
  const initialState={firstName:"",lastName:"",email:"",password:"",confirmPassword:""}
  const [formData,setFormData]=useState(initialState)
  const [showPassword,setShowPassword]=useState(false)
  const [confirmPassword,setConfirmPassword]=useState(false)
  const [isSignUp,setIsSignUp]=useState(false)
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(isSignUp){
      dispatch(signup(formData,navigate))
    }
    else{
      dispatch(signin(formData,navigate))
    }
  }
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  useEffect(() => {
    function start() {
    gapi.client.init({
    clientId:"976141248185-dlj0fdmguhmv1g5be3vj7uuma9mk6f66.apps.googleusercontent.com",
    scope: 'email',
      });
       }
      gapi.load('client:auth2', start);
       }, []);
  const googleSuccess=async(res)=>{
    const result=res?.profileObj
    const token=res?.tokenId
    try{
      dispatch({type:'AUTH',data:{result,token}})
      navigate('/')
    }
    catch(error){
      console.log(error)
    }
  }
  const googleFailure=(error)=>{
    console.log(error)
    console.log('Sign In Failed')
  }
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}> 
          <LockOutlinedIcon/>
        </Avatar>
        <Typography variant='h5'>{isSignUp?"Sign Up":"Sign In"}</Typography>
        
      <form className={classes.form} onSubmit={handleSubmit}>
    <Grid container spacing={3}>
      {isSignUp&&(
        <>
        <Input name='firstName' label='First Name' autoFocus half handleChange={handleChange}/>
        <Input name='lastName' label='Last Name' half handleChange={handleChange}/>
        </>
      ) }
      <Input name='email' label='Email Address' autoFocus handleChange={handleChange} type='email'/>
      <Input name='password' label='Password' autoFocus handleChange={handleChange} type={showPassword?'text':'password'} handleShowPassword={()=>setShowPassword(!showPassword)}/>
      {isSignUp&&<Input name='confirmPassword' label='Repeat Password' handleChange={handleChange} type={showPassword?'text':'password'} handleShowPassword={()=>setConfirmPassword(!confirmPassword)}/>}
      <div className={classes.submitIt}>
      <Button type='submit' fullWidth variant='contained' color='primary'  >{isSignUp?'Sign Up':'Sign In'}</Button>
      </div>
      <div className={classes.google} >
      <GoogleLogin
        clientId="976141248185-dlj0fdmguhmv1g5be3vj7uuma9mk6f66.apps.googleusercontent.com"
        render={(renderProps)=>(
          <Button color='primary' fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled }startIcon={<Icon/>} variant='contained'
          >Google Sign In</Button>
  )}
        onSuccess={googleSuccess}
        onFailure={googleFailure}
        cookiePolicy='single_host_origin'
      />
      </div>
      <Grid container justifyContent='flex-end'>
        <Grid item >
          <Button onClick={()=>{setIsSignUp(!isSignUp)
            setShowPassword(true)
          }}>{isSignUp?'Already have an account?':'No account? Sign Up'}</Button>
        </Grid>
      </Grid>
    </Grid>
      </form>
      </Paper>
      </Container>
    </div>
  )
}

export default Auth