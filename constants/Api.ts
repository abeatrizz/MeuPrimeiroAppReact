export const API_KEY = 'b1da9b1ea83a2c7fb03a090394cb2319';

export const BASE_URL = 'https://api.themoviedb.org/3';
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export const endpoints = {
  popular: '/movie/popular',
  search: '/search/movie',
};

export const headers = {
  'Authorization': `Bearer ${API_KEY}`,
  'accept': 'application/json',
}; 