import React, {useState, useEffect} from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Container from '@mui/material/Container';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/BottomNavigation/BottomNavigation';
import Movies from './components/Pages/Movies/Movies';
import Search from './components/Pages/Search/Search';
import './App.css';


function App() {
  const [content, setContent] = useState([]);

  const fetchModal = async () => {
    const response = await fetch('https://imdb-api.com/en/API/FullCast/k_v4s0xhy8/tt0111161')
    const data = await response.json();

    setContent(data);
  }

  console.log(content)
  useEffect(() => {
    fetchModal()
  },[])

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
