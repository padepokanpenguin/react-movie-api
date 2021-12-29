import React, {useState} from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SearchIcon from '@mui/icons-material/Search';

export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ 	width: "100vw",
    			display: "inline-block",
    			height: "10vh",
    			position: "fixed",
    			bottom: 0,
    			transform: "scale(1.25)",
    			zIndex: 100,
    			boxShadow: "0 5px 20px rgba(0, 0, 0, .5)",
    			color: "#111"
    		}}>
        
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Movies" icon={<MovieCreationOutlinedIcon />} />
        <BottomNavigationAction label="Trending" icon={<AutoAwesomeIcon />} />
        <BottomNavigationAction label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
    </Box>
  );
}
