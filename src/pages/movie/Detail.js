import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import Movies from "../../components/Movies/Movies";
import { updateMovies } from "../../features/MoviesSlice";
import ENDPOINTS from "../../utils/constants/endpoints";

function Detail() {
  // Simpan id (params) ke variable
  const { id } = useParams();

  // Buat dispatch
  const dispatch = useDispatch();
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getRecommendationMovies();
    // eslint-disable-next-line 
  }, [id]);

  // eslint-disable-next-line 
  async function getRecommendationMovies() {
    // Fetch data dari axios
    const response = await axios(ENDPOINTS.RECOMMENDATIONS(id));
    const movies = response.data.results;
    dispatch(updateMovies(movies));
    // eslint-disable-next-line 
  }

  return (
    <>
      <DetailMovie />
      <Movies titlePage="Recommendation Movies" />
    </>
  );
}

export default Detail;