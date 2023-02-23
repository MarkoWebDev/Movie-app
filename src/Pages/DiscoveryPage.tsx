import React from "react";
import Navbar from "../modules/navbar/Navbar";
import Footer from "../modules/footer/Footer";
import HeroHeader from "../modules/navbar/HeroHeader";
import DiscoveryLayout from "../modules/DiscoveryLayout/DiscoveryLayout";

const DiscoveryPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroHeader></HeroHeader>
      <DiscoveryLayout></DiscoveryLayout>
      <Footer></Footer>
    </div>
  );
};

export default DiscoveryPage;
