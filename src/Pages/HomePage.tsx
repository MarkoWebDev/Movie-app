import React from "react";
import Navbar from "../modules/navbar/components/Navbar";
import Footer from "../modules/footer/components/Footer";
import HeroHeader from "../modules/navbar/components/HeroHeader";
import HeroCarousel from "../modules/navbar/components/HeroCarousel";
import GridMovies from "../modules/movie-top-list/GridMovies";

const HomePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroHeader></HeroHeader>
      <HeroCarousel></HeroCarousel>
      <GridMovies></GridMovies>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
