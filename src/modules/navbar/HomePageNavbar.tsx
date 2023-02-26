import React from "react";
import logo from "../../assets/images/logo.webp";
import Search from "./Search";
import WrapperContainer from "../../shared/WrapperContainer/WrapperContainer";
import { Button } from "@material-tailwind/react";
import FavoriteMovies from "../FavoriteMovies/FavoriteMovies";
import { NavLink } from "react-router-dom";
import useMediaQuery from "../../shared/MediaQueryHook/MediaQuery";

const HomePageNavbar = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  return (
    <div className="fixed flex justify-between bg-transparent w-full h-14 items-center z-[100] ">
      <WrapperContainer singlePage={false}>
        {!isMobile ? (
          <div className="flex justify-between items-center pt-8">
            <div>
              <img src={logo} alt="logo"></img>
            </div>
            <div className="flex items-center">
              <NavLink to="/novo">
                <p className="flex mx-4 font-lato text-sm whitespace-nowrap text-gray h-full cursor-pointer hover:text-white">
                  Novo
                </p>
              </NavLink>
              <div>
                <FavoriteMovies></FavoriteMovies>
              </div>
              <div className="w-96">
                <Search></Search>
              </div>
              <div className="ml-2">
                <Button
                  size="sm"
                  variant="outlined"
                  color="white"
                  className={
                    "font-lato text-sm normal-case font-light bg-blue-gray-800 border-0 rounded-md"
                  }
                >
                  Prijava
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="pt-14">
            <div className="flex justify-between items-center ">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-6 h-6 text-base "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </div>
              <div>
                <img className="h-4" src={logo} alt="logo"></img>
              </div>
              <div className="ml-2">
                <Button
                  size="sm"
                  variant="outlined"
                  color="white"
                  className={
                    "font-lato text-sm normal-case font-light bg-blue-gray-800 border-0 rounded-md"
                  }
                >
                  Prijava
                </Button>
              </div>
            </div>
            <div className="flex items-center pt-4">
              <NavLink to="/novo">
                <p className="flex  font-lato text-sm whitespace-nowrap text-gray h-full cursor-pointer hover:text-white">
                  Novo
                </p>
              </NavLink>
              <div>
                <FavoriteMovies></FavoriteMovies>
              </div>
              <div className="w-full">
                <Search></Search>
              </div>
            </div>
          </div>
        )}
      </WrapperContainer>
    </div>
  );
};

export default HomePageNavbar;
