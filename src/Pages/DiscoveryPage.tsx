import React from "react";
import Navbar from "../modules/navbar/Navbar";
import Footer from "../modules/footer/Footer";
import HeroHeader from "../modules/navbar/HeroHeader";
import FilterComponent from "../modules/DiscoveryPage/Filter/FilterComponent";

const DiscoveryPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroHeader></HeroHeader>
      <FilterComponent></FilterComponent>
      <Footer></Footer>
    </div>
  );
};

export default DiscoveryPage;
