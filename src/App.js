import React, {useState} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Container from '@mui/material/Container';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/BottomNavigation/BottomNavigation'
import './App.css';


function App() {
  const [Movies, setMovies] = useState([
    {
      "id": "tt0241527",
      "resultType": "Title",
      "image": "https://imdb-api.com/images/original/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_Ratio0.7273_AL_.jpg",
      "title": "Harry Potter and the Sorcerer's Stone",
      "description": "(2001)"
    },
    {
      "id": "tt0330373",
      "resultType": "Title",
      "image": "https://imdb-api.com/images/original/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_Ratio0.7273_AL_.jpg",
      "title": "Harry Potter and the Goblet of Fire",
      "description": "(2005)"
    },
    {
      "id": "tt0417741",
      "resultType": "Title",
      "image": "https://imdb-api.com/images/original/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_Ratio0.7273_AL_.jpg",
      "title": "Harry Potter and the Half-Blood Prince",
      "description": "(2009)"
    },
    {
      "id": "tt16116174",
      "resultType": "Title",
      "image": "https://imdb-api.com/images/original/MV5BNTZkNWEyZTgtYzJlOS00OWNiLTgwZjMtZGU5NTRhNDNjOTRhXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_Ratio1.0000_AL_.jpg",
      "title": "Harry Potter 20th Anniversary: Return to Hogwarts",
      "description": "(2022) (TV Special)"
    },
    {
      "id": "tt1201607",
      "resultType": "Title",
      "image": "https://imdb-api.com/images/original/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_Ratio0.7273_AL_.jpg",
      "title": "Harry Potter and the Deathly Hallows: Part 2",
      "description": "(2011)"
    },
    {
      "id": "tt0304141",
      "resultType": "Title",
      "image": "https://imdb-api.com/images/original/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_Ratio0.7273_AL_.jpg",
      "title": "Harry Potter and the Prisoner of Azkaban",
      "description": "(2004)"
    },
    {
      "id": "tt0295297",
      "resultType": "Title",
      "image": "https://imdb-api.com/images/original/MV5BMTcxODgwMDkxNV5BMl5BanBnXkFtZTYwMDk2MDg3._V1_Ratio0.7273_AL_.jpg",
      "title": "Harry Potter and the Chamber of Secrets",
      "description": "(2002)"
    },
    {
      "id": "tt0373889",
      "resultType": "Title",
      "image": "https://imdb-api.com/images/original/MV5BMTM0NTczMTUzOV5BMl5BanBnXkFtZTYwMzIxNTg3._V1_Ratio0.7273_AL_.jpg",
      "title": "Harry Potter and the Order of the Phoenix",
      "description": "(2007)"
    },
    {
      "id": "tt0926084",
      "resultType": "Title",
      "image": "https://imdb-api.com/images/original/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_Ratio0.7273_AL_.jpg",
      "title": "Harry Potter and the Deathly Hallows: Part 1",
      "description": "(2010)"
    },
    {
      "id": "tt1810644",
      "resultType": "Title",
      "image": "https://imdb-api.com/images/original/MV5BNDcwNDA4ZmYtZDI4My00ZTQ0LThmZDItY2Y4Y2E4ZDBjYjc2XkEyXkFqcGdeQXVyMjM4NjM5OA@@._V1_Ratio1.7727_AL_.jpg",
      "title": "I Am Harry Potter",
      "description": "(2010) (Short)"
    }
]
)

  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Route path='/' component={Movies} exact/>
            <Route path='/trending' component={Trending}/>
            <Route path='/search' component={Search}/>
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation/>
    </BrowserRouter>
  );
}

export default App;
