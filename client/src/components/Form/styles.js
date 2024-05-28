import { makeStyles } from '@mui/styles';
import { spacing } from '@mui/system';
export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      width: '32ch',
      margin:'4px',
    },
    paper: {
      padding: spacing(2),
    },
    '& .MuiButton-root': {
      width:'32ch',
      margin:'2px'
    }
  },

  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    margin: '10px',
  },
}));