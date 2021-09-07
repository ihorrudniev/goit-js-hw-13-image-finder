import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';
const key = '23243839-9e0dbc2f727b7d3ca19c2cc88';

export function getPictures(query, page) {
  return axios.get(`&q=${query}&page=${page}&per_page=12&key=${key}`);
}
