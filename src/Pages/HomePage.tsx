import React, { useState, useEffect } from "react";
import Navbar from "../modules/navbar/Navbar";
import Footer from "../modules/footer/Footer";
import HeroHeader from "../modules/navbar/HeroHeader";
import HeroCarousel from "../modules/navbar/HeroCarousel";
import GridMovies from "../modules/movie-top-list/GridMovies";
import Spinner from "../shared/Spinner/Spinner";
import MoviesRows from "../modules/MoviesRows/MoviesRows";

const HomePage = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <HeroHeader></HeroHeader>
      {!loading ? (
        <div>
          <HeroCarousel></HeroCarousel>
          <GridMovies></GridMovies>
          <MoviesRows></MoviesRows>
          <Footer></Footer>
        </div>
      ) : (
        <Spinner></Spinner>
      )}
    </div>
  );
};

export default HomePage;
