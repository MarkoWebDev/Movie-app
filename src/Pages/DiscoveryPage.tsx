import React, { useState, useEffect } from "react";
import Navbar from "../modules/navbar/Navbar";
import Footer from "../modules/footer/Footer";
import HeroHeader from "../modules/navbar/HeroHeader";
import HeroCarousel from "../modules/navbar/HeroCarousel";
import GridMovies from "../modules/MovieIconsGrid/GridMovies";
import Spinner from "../shared/Spinner/Spinner";
import MoviesRows from "../modules/MoviesRows/MoviesRows";
import ErrorDialog from "../core/ErrorDialog";

const DiscoveryPage = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <ErrorDialog></ErrorDialog>
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

export default DiscoveryPage;
