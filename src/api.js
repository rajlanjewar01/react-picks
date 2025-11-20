import axios from 'axios';

const searchImages = async(term) => {
	const response = await axios.get('https://api.unsplash.com/search/photos', 
		{
			headers: {
				Authorization: 'Client-ID MRBv7Qh8sVmOxV8uVD7eP7EXx-Be1-u55evptLt_6Mo'
			},
			params: {
				query: term
			}
		});
		return response.data.results;
	}

export default searchImages;
