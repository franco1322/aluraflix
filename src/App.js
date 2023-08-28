import React from 'react';
import Header from './component/Header';
import Footer from './component//Footer';

import { makeStyles } from '@material-ui/core';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import NuevoVideo from './pages/nuevovideo';
import Page404 from './pages/page404';



const useStyles = makeStyles((theme) => ({
    buddy: {
      backgroundColor: '#000000',
      textAlign: 'center',
      marginTop: 'auto',
      width: '100%',
      color: '#ffffff',
      
    },
    content: {
      
      textAlign: 'center',
      marginTop: 'auto',
      width: '85%',
      margin: '2.5rem',
    },
    
  }));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.buddy} >
        <Router>
      <Header />
      <div className={classes.content}>
        <Routes >
       
          <Route path='/' element={ <Home /> } />
          <Route path='/nuevovideo' element={ <NuevoVideo /> }/>
          <Route path='*' element={ <Page404/> } />
         
        </Routes>
        </div>
      <Footer />
      </Router>
    </div>
  );

}

export default App;
