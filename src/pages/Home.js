// Lakukan import Hero, Movies, AddMovieForm Component
import React from 'react';
import Hero from '../components/Hero/Hero';
import Movies from '../components/Movies/Movies';

/**
 * Buat Component Home
 * Untuk menyimpan Component Hero, Movies dan AddMovieForm
 */
function Home() {
/**
 * Mengangkat state movies ke atas (Home): lifting state
 * dari component Movies ke Home
 */


// Kirim state sebagai props ke Component Movies dan AddMovieForm
return (
  <div>
    <Hero />
    <Movies titlePage="Latest Movies"/>
  </div>
);
}

// Lakukan export Home
export default Home;
