import axios from 'axios';
import { API_KEY, BASE_URL, endpoints } from '../constants/Api';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'pt-BR',
  },
});

export const getPopularMovies = async () => {
  try {
    const response = await api.get(endpoints.popular);
    return response.data.results;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Erro ao buscar filmes populares:', {
        status: error.response?.status,
        message: error.message,
        data: error.response?.data
      });
    } else {
      console.error('Erro ao buscar filmes populares:', error);
    }
    throw error;
  }
};

export const searchMovies = async (query: string) => {
  try {
    const response = await api.get(endpoints.search, {
      params: { 
        query,
        api_key: API_KEY,
        language: 'pt-BR',
      },
    });
    return response.data.results;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Erro ao buscar filmes:', {
        status: error.response?.status,
        message: error.message,
        data: error.response?.data
      });
    } else {
      console.error('Erro ao buscar filmes:', error);
    }
    throw error;
  }
}; 