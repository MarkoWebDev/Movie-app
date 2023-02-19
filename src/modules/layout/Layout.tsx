import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../../Pages/HomePage";
import DiscoveryPage from "../../Pages/DiscoveryPage";

const Layout = () => {
  return (
    <div className="bg-background-dark">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route
            path="/discovery"
            element={<DiscoveryPage></DiscoveryPage>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Layout;
