/**
 * import CSS Module Movies
 * simpan di variable styles
 */
import React from 'react';
import Movie from '../Movie/Movie';
import styles from './Movies.module.css';
import { useSelector } from 'react-redux';

/**
* Buat Component Movies
* Menampilkan movie-movie
*/
function Movies({ titlePage }) {

  const movies = useSelector((store) => store.movies.movies);

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>{titlePage}</h2>
        <div className={styles.movie__container}>
          {/* looping: map */}
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  );
}

// Lakukan export Movies
export default Movies;
