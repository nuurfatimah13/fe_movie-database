import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Hero from '../../components/Hero/Hero';
import Movies from '../../components/Movies/Movies';
import { updateMovies } from '../../features/MoviesSlice';
import ENDPOINTS from '../../utils/constants/endpoints';

function PopularMovie() {
  // Buat dispatch
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getPopularMovies();
    // eslint-disable-next-line
  }, []);

  // eslint-disable-next-line 
  async function getPopularMovies() {
    // Fetch data dari axios
    const response = await axios(ENDPOINTS.POPULAR);
    const movies = response.data.results;
    dispatch(updateMovies(movies));
    // eslint-disable-next-line
  }

  return (
    <>
      <Hero />
      <Movies titlePage="Popular Movies" />
    </>
  );
}

export default PopularMovie;
