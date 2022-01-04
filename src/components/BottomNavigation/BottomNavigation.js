import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import SearchIcon from '@mui/icons-material/Search';


export default function SimpleBottomNavigation() {
  const [value, setValue] = useState('');
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
          localStorage.setItem('value', JSON.stringify(value))
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Top Movies" icon={<MovieCreationOutlinedIcon />} />
        <BottomNavigationAction label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
    </Box>
  );
}
