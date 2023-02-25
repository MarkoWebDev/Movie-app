import React, { useContext } from "react";
import logo from "../../assets/images/logo.webp";
import WrapperContainer from "../../shared/WrapperContainer/WrapperContainer";
import { NavLink, Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import FavoriteMovies from "../FavoriteMovies/FavoriteMovies";
import useMediaQuery from "../../shared/MediaQueryHook/MediaQuery";
import { GlobalMovieContext } from "../../shared/GlobalContext/GlobalContext";
import Search from "./Search";

const Navbar = () => {
  let activeStyle = {
    color: "white",
  };

  const isDesktop = useMediaQuery("(max-width: 1024px)");
  const { sectionTop } = useContext<any>(GlobalMovieContext);

  console.log("Navbar runnings");

  console.log("sectionTopp", sectionTop);

  return (
    <div>
      {isDesktop ? (
        <WrapperContainer singlePage={false}>
          <div
            ref={sectionTop}
            className="sticky flex justify-between ml-4 top-0 left-0 bg-background-dark w-full h-14 items-center z-[100]"
          >
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
              <Link to="/">
                <img
                  className={isDesktop ? "h-4" : "h-5"}
                  src={logo}
                  alt="logo"
                ></img>
              </Link>
            </div>
            <div className="flex items-center mr-4">
              <FavoriteMovies></FavoriteMovies>
            </div>
          </div>
          <div className="flex pt-4 justify-start w-full items-center overflow-visible">
            <NavLink
              to="/discovery"
              className={
                isDesktop
                  ? "flex mr-2 font-lato text-xs whitespace-nowrap text-gray h-full"
                  : "flex mx-4 font-lato text-sm whitespace-nowrap text-gray h-full"
              }
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Početna
            </NavLink>
            <NavLink
              to="/novo"
              className="flex mr-2 font-lato text-sm whitespace-nowrap text-gray h-full"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Novo
            </NavLink>
            <div className="flex items-center w-full h-12 z-10  ">
              <Search></Search>
            </div>
          </div>
        </WrapperContainer>
      ) : (
        <WrapperContainer singlePage={false}>
          <div className="flex fixed top-0 left-0 ml-16 bg-background-dark w-full h-14 items-center z-[100]">
            <div>
              <Link to="/">
                <img
                  className={isDesktop ? "h-3" : "h-5"}
                  src={logo}
                  alt="logo"
                ></img>
              </Link>
            </div>
            <div className="flex justify-end w-full items-center overflow-visible">
              {/* navigation links */}
              <NavLink
                to="/discovery"
                className={
                  isDesktop
                    ? "flex mx-4 font-lato text-xs whitespace-nowrap text-gray h-full"
                    : "flex mx-4 font-lato text-sm whitespace-nowrap text-gray h-full"
                }
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Početna
              </NavLink>
              <NavLink
                to="/novo"
                className="flex mx-4 font-lato text-sm whitespace-nowrap text-gray h-full"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Novo
              </NavLink>
              <FavoriteMovies></FavoriteMovies>
              {/* //search input */}
              <div className="flex z-[1] grow-[2] h-12 items-center mx-4">
                <div className="flex items-center w-full h-12 z-10 p-0 ">
                  <Search></Search>
                </div>
              </div>
              {/* navbar button */}
              <div className="flex min-w-[92px] items-center cursor-pointer mr-32 ">
                <Button
                  size="sm"
                  variant="outlined"
                  color="white"
                  className={
                    isDesktop
                      ? "hidden"
                      : "font-lato text-sm normal-case font-light"
                  }
                >
                  Prijava
                </Button>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="w-6 h-6 text-base ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </WrapperContainer>
      )}
    </div>
  );
};

export default Navbar;
