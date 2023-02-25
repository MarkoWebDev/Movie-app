import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DiscoveryPage from "../../Pages/DiscoveryPage";
import MoviesPage from "../../Pages/MoviesPage";
import ErrorInterceptorContext from "../../core/ErrorInterceptorContext";
import GlobalContext from "../../shared/GlobalContext/GlobalContext";
import SingleMoviePage from "../../Pages/SingleMoviePage";
import HomePage from "../../Pages/HomePage";

const Layout = () => {
  return (
    <div className="bg-background-dark">
      <BrowserRouter>
        <ErrorInterceptorContext>
          <GlobalContext>
            <Routes>
              <Route path="/" element={<HomePage></HomePage>}></Route>
              <Route path="/novo" element={<MoviesPage></MoviesPage>}></Route>
              <Route
                path="/discovery"
                element={<DiscoveryPage></DiscoveryPage>}
              ></Route>
              <Route
                path="movieDetails/:id"
                element={<SingleMoviePage></SingleMoviePage>}
              ></Route>
            </Routes>
          </GlobalContext>
        </ErrorInterceptorContext>
      </BrowserRouter>
    </div>
  );
};

export default Layout;
