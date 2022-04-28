import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';
const KEY = process.env.KEY;

export function getPictures(query, page) {
  return axios.get(`&q=${query}&page=${page}&per_page=12&key=${KEY}`);
}
