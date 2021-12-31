import React, {props} from 'react';
import {img_300, unavailable} from '../Config/Config';

const listContent = (props) => {
	return (
		<div className="movie-card">
			<img src={props.poster} />
			<div>{props.title}</div>
		</div>
		)
}

export default listContent;