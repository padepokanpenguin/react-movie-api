import {useState, useEffect} from 'react';

const Modal = (props) => {

	const displayToggle = props.show ? "show-display" : "hidden-display"

	return (
		<div className={displayToggle}>
			<div className="modal-container">
				<button className="close-btn"> &times; </button>
				<div className="col-1">

				</div>
				<div className="col-1">

				</div>
			</div>
		</div>
	)

}

export default Modal;