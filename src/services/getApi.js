import axios from 'axios';

const API_KEY = '5f3a7f6b441b3880b18f274186db629e';

axios.defaults.baseURL = 'https://api.themoviedb.org';

export default {
  async getPopularMovies() {
    try {
      const response = axios.get(`/3/trending/all/day?api_key=${API_KEY}`);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },

  async getMovieDetails(id) {
    try {
      const response = axios.get(
        `/3/movie/${id}?api_key=${API_KEY}&language=en-US`,
      );
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },

  async getMovieActors(id) {
    try {
      const response = axios.get(`/3/movie/${id}/credits?api_key=${API_KEY}`);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },

  async getMovieReview(id) {
    try {
      const response = axios.get(
        `/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
      );
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },

  async searchMovie(query) {
    try {
      const response = axios.get(
        `/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`,
      );
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
};