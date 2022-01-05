import {useState, useEffect} from 'react';

const Modal = (props) => {

	const [content, setContent] = useState([]);

	 const fetchModal = async () => {
	   const response = await fetch('https://imdb-api.com/en/API/FullCast/k_v4s0xhy8/tt0111161')
	   const data = await response.json();

	    setContent(data);
	  }

  useEffect(() => {
    fetchModal()
  },[])

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