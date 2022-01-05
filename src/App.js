import React, {useState, useEffect} from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Container from '@mui/material/Container';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/BottomNavigation/BottomNavigation';
import Movies from './components/Pages/Movies/Movies';
import Search from './components/Pages/Search/Search';
import './App.css';


function App() {


  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Route path='/' component={Movies} exact/>
            <Route path='/search' component={Search}/>
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
