import { makeStyles } from '@mui/styles';
import { deepPurple } from '@mui/material/colors';
export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    position:'absolute',
    margin: '10px 0',
    padding: '15px 20px',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '600px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop:'10px',
  },
  flexAll:{
    justifyContent:'space-between',
    display:'flex',
  }
}));