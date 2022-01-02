import React, {useState, useEffect} from 'react';
import ListContent from '../../Content/Content';
import Modal from '../../Modal/Modal';

const Movies = () => {

	const [content, setContent] = useState([]);

	const fetchMovies = async () => {
		const response = await fetch('https://imdb-api.com/en/API/Top250Movies/k_v4s0xhy8')
		const data = await response.json();

		setContent(data.items);
	}

	useEffect(() => {
		fetchMovies()
	}, [])

	return (
	<div>
		<span className="title">Top Movies</span>
		<div className="movies">
			<Modal />
			{
				content && content.map((c) => <ListContent key={c.id} id={c.id} poster={c.image} title={c.fullTitle} rating={c.imDbRating} />)
			}
		</div>
	</div>
	)
}

export default Movies;