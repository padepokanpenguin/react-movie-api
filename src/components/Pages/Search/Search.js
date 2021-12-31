import React, {useState, useEffect} from 'react';
import {TextField, Button} from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";
import ListContent from '../../Content/Content';

const Search = () => {
	const [inputSearch, setInputSearch] = useState("");
	const [content, setContent] = useState([]);


	const fetchSearch = async () => {
		const response = await fetch(`https://imdb-api.com/API/AdvancedSearch/k_v4s0xhy8?title=Avengers`)
		const data = await response.json();

		setContent(data.results);
	}

	// console.log(inputSearch)
	useEffect(() => {
		window.scroll(0,0);
		fetchSearch();
	}, [])

	return (
	<div>
		<div style={{display: 'flex', margin: '15px 0'}}>
			<TextField 
				style={{ flex:1 }}
				className="searchBox"
				label="Enter a Title"
				variant="filled"
				onChange= {((e) => setInputSearch(e.target.value))}
			/>
			<Button variant="contained" style={{ marginLeft: 10 }} onClick={fetchSearch} > <SearchIcon/> </Button>
		</div>
		<div className="movies">
			{
				content && content.map((c) => <ListContent key={c.id} id={c.id} poster={c.image} title={c.title} rating={c.imDbRating} />)
			}
		</div>
	</div>
	)
}

export default Search;