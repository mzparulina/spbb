import axios from 'axios';

export default axios.create({
	baseURL: 'https://5f8faccf693e730016d7b486.mockapi.io',
	headers: {
		'Content-type': 'application/json',
	},
});
