import React from "react";
import Navbar from "../modules/navbar/components/Navbar";
import Footer from "../modules/footer/components/Footer";
import HeroHeader from "../modules/navbar/components/HeroHeader";
import HeroCarousel from "../modules/navbar/components/HeroCarousel";

const HomePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroHeader></HeroHeader>
      <HeroCarousel></HeroCarousel>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
