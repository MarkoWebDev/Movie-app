import React from "react";
import Navbar from "../modules/navbar/Navbar";
import Footer from "../modules/footer/Footer";
import HeroHeader from "../modules/navbar/HeroHeader";
import MoviesLayoutSection from "../modules/MoviesLayoutSection/MoviesLayoutSection";

const MoviesPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroHeader></HeroHeader>
      <MoviesLayoutSection></MoviesLayoutSection>
      <Footer></Footer>
    </div>
  );
};

export default MoviesPage;
