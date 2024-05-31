import { makeStyles } from '@mui/styles';
export default makeStyles(() => ({
  paper: {
    marginTop: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
  },
  root: {
    '& .MuiTextField-root': {
      margin: 2,
    },
  },
  avatar: {
    margin: 1,
    backgroundColor: 'red',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: 16,
  },
  submitIt: {
    width:'100%',
    paddingLeft:'26px',
    marginTop:'10px',
  },
  google:{
    width:'100%',
    paddingLeft:'26px',
    marginTop:'10px',
  },
  googleButton: {
    marginBottom: 2,
  },
}));