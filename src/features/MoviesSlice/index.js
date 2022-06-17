// import createSlice untuk membuat Slice
import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/data";


const moviesSlice = createSlice({
  name: "Movies Slice",
  initialState: {
    movies: data,
  },
  reducers: {
    addMovie(state, action) {
      state.movies.push(action.payload);
    },
    // Membuat reducer untuk update movies
    updateMovies(state, action) {
      state.movies = action.payload;
    },
  },
});

// generate action updateMovies
const moviesReducer = moviesSlice.reducer;
const { addMovie, updateMovies } = moviesSlice.actions;

// export reducers dan actions
export default moviesReducer;
export { addMovie, updateMovies };