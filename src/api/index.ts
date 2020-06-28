import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://hybridtv.ss7.tv/techtest/'
});

export const fetchMovies = () => axiosInstance.get('/movies.json');

export default {
  fetchMovies
};
