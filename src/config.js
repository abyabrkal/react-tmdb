// Configuration for TMDB
// To se the latest configuration fetch it from https://api.themoviedb.org/3/configuration?api_key=019e8f375549e0bbd4a4191862ebc88f
// Read more about the API here: https://developers.themoviedb.org/

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '844dba0bfd8f3a4f3799f6130ef9e335';

const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&query=`;
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}`;
const NOWSHOW_BASE_URL = `${API_URL}movie/now_playing?api_key=${API_KEY}&language=en`;
//https://api.themoviedb.org/3/movie/now_playing?api_key=844dba0bfd8f3a4f3799f6130ef9e335&with_original_language=ml&language=en&sort_by=release_date.desc&year=2020

const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
// Sizes: w300, w780, w1280, original
const HEROS_SIZE = 'w780';
const BACKDROP_SIZE = 'w1280';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w500';

export { API_URL, API_KEY, SEARCH_BASE_URL, POPULAR_BASE_URL, NOWSHOW_BASE_URL, IMAGE_BASE_URL, HEROS_SIZE, BACKDROP_SIZE, POSTER_SIZE };
