import './App.css';
import {Container,AppBar,Typography,Grow,Grid} from "@mui/material"
import { IMAGE_URL } from './utils/urls';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import useStyles from './styles.js';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from './components/actions/post.js';
function App() {
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(0);
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit" >
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img className={classes.image} src={IMAGE_URL} alt="icon" height="80" width="90px"/>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form  currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
