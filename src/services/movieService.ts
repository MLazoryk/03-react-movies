import axios from 'axios';
import type { Movie } from '../types/movie';

export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  // HARDCODED TOKEN FOR TESTING
  const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWY1NjUwMjcwOGEyMDlhZjFiZWRjZTcwMzNiNDVlNCIsIm5iZiI6MTc5NTEyOTEzNi4wNTIsInN1YiI6IjZhZmY3ZjMwNDFkNjJkMzQ3NWJhOTE5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.25PcIEQvavOKl9TVlPQrzD5UXY7iiN_3rRSYmKfuW7I";

  const response = await axios.get<MovieResponse>(
    'https://api.themoviedb.org/3/search/movie',
    {
      params: {
        query: query,
        include_adult: false,
        language: 'en-US',
        page: 1,
      },
      headers: {
        Authorization: `Bearer ${token}`,
        accept: 'application/json',
      },
    }
  );
  
  return response.data.results;
};