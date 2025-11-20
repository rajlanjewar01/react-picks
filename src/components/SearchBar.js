import './SearchBar.css';
import { useState } from 'react';

function SearchBar({onSubmit}) {
	const [term, setTerm] = useState('');

	const handleFormSubmit = (event) => {
		event.preventDefault();
		onSubmit(term);
	}

	const handleChange = (event) => {
		setTerm(event.target.value);
	}

	return (
		<div className="searchbar">
			<form onSubmit={handleFormSubmit}>
				<input value={term} onChange={handleChange} placeholder='Enter Search Term.. for searching images'/>
			</form>
		</div>
	);
}

export default SearchBar;
