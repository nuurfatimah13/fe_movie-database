import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/MoviesSlice";


const store = configureStore({
    reducer: {
        movies: moviesReducer,
    },
});

// import
export default store;