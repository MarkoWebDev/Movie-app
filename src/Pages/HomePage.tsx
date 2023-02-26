import React from "react";
import HomePageLayout from "../modules/HomePageLayout/HomePageLayout";
import Footer from "../modules/footer/Footer";
import HomePageNavbar from "../modules/navbar/HomePageNavbar";

const HomePage = () => {
  return (
    <div>
      <HomePageNavbar></HomePageNavbar>
      <HomePageLayout></HomePageLayout>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
