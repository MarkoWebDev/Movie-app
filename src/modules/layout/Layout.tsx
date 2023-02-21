import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../../Pages/HomePage";
import DiscoveryPage from "../../Pages/DiscoveryPage";
import ErrorInterceptorContext from "../../core/ErrorInterceptorContext";
import GlobalContext from "../../shared/GlobalContext/GlobalContext";

const Layout = () => {
  return (
    <div className="bg-background-dark">
      <BrowserRouter>
        <ErrorInterceptorContext>
          <GlobalContext>
            <Routes>
              <Route path="/" element={<HomePage></HomePage>}></Route>
              <Route
                path="/discovery"
                element={<DiscoveryPage></DiscoveryPage>}
              ></Route>
            </Routes>
          </GlobalContext>
        </ErrorInterceptorContext>
      </BrowserRouter>
    </div>
  );
};

export default Layout;
