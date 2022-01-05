import React, {useState, useEffect} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import SearchIcon from '@mui/icons-material/Search';

const appPage = [
{
  id: 0,
  path: "/",
  title: "movies",
},
{
  id: 1,
  path: "/search",
  title: "search page",
}
]


export default function SimpleBottomNavigation() {
  const location = useLocation();
  const [value, setValue] = useState(appPage.find((page) => page.path === location.pathname).id);
  const history = useHistory();

 

  return (
    <Box sx={{ 	width: "100vw",
    			display: "inline-block",
    			height: "9vh",
    			position: "fixed",
    			bottom: 0,
    			transform: "scale(1.1)",
    			zIndex: 100,
    			boxShadow: "0 5px 20px rgba(0, 0, 0, .5)",
    			color: "#111"
    		}}>
        
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          history.push(appPage.find((page) => page.id === newValue)?.path)
        }}
      >
        <BottomNavigationAction label="Top Movies" icon={<MovieCreationOutlinedIcon />} />
        <BottomNavigationAction label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
    </Box>
  );
}
