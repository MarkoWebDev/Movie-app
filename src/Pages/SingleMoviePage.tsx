import React from "react";
import Navbar from "../modules/navbar/Navbar";
import Footer from "../modules/footer/Footer";
import MovieDetails from "../modules/MovieDetail/MovieDetails";

const SingleMoviePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <MovieDetails></MovieDetails>
      <Footer></Footer>
    </div>
  );
};

export default SingleMoviePage;
