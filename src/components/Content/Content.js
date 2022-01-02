import React from 'react';

const listContent = (props) => {
	return (
		<div className="movie-card">
			<img src={props.poster} alt="poster"/>
			<div>{props.title}</div>
		</div>
		)
}

export default listContent;