import './App.css';
import {Container,AppBar,Typography,Grow,Grid} from "@mui/material"
import { IMAGE_URL } from './utils/urls';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
 import useStyles from './styles.js';
import GetPosts from './hooks/getPostData.js';
import GetcreatedPosts from './hooks/getcreateData.js';
import { useSelector } from 'react-redux';
function App() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit" >
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img className={classes.image} src={IMAGE_URL} alt="icon" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form  />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
