import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Hero from '../../components/Hero/Hero';
import Movies from '../../components/Movies/Movies';
import { updateMovies } from '../../features/MoviesSlice';
import ENDPOINTS from '../../utils/constants/endpoints';

function NowPlayingMovie() {
  // Buat dispatch
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getNowPlayingMovies();
    // eslint-disable-next-line
  }, []);

  // eslint-disable-next-line 
  async function getNowPlayingMovies() {
    // Fetch data dari axios
    const response = await axios(ENDPOINTS.NOW_PLAYING);
    const movies = response.data.results;
    dispatch(updateMovies(movies));
    // eslint-disable-next-line
  }

  return (
    <>
      <Hero />
      <Movies titlePage="Now Playing Movies" />
    </>
  );
}

export default NowPlayingMovie;
