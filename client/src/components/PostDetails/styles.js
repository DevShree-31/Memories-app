import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '70%',
    maxHeight: '600px',
  },
  card: {
    display: 'flex',
    width: '100%',
      flexWrap: 'wrap',
      flexDirection: 'row',
  },
  section: {
    width:'100%',
    borderRadius: '20px',
    margin: '10px',
    flex: 1,
  },
  imagediv: {
    marginRight:'0px',
    width:'60%'
      },
}));