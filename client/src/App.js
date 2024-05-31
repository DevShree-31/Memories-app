import './App.css';
import { Container } from '@mui/material';
import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home/Home.js';
import Auth from './components/Auth/Auth.js';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
function App(){
  return (
    <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar />
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/auth"  element={<Auth/>} />
      </Routes>
    </Container>
    </BrowserRouter>
  );
}

export default App;
