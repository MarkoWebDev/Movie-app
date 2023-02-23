import React, { useEffect, useState, useContext } from "react";
import logo from "../../assets/images/logo.webp";
import WrapperContainer from "../../shared/WrapperContainer/WrapperContainer";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import FavoriteMovies from "../FavoriteMovies/FavoriteMovies";
import axios from "axios";
import { InterceptorContext } from "../../core/ErrorInterceptorContext";

const Navbar = () => {
  let activeStyle = {
    color: "white",
  };

  const API_KEY = process.env.REACT_APP_API_KEY;
  const [query, setQuery] = useState<string>("");
  const { handleAddError } = useContext<any>(InterceptorContext);

  const [movie, setMovie] = useState<any[]>([]);

  const searchMovies = async () => {
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
    try {
      const response = await axios.get(searchUrl);
      const data = await response.data.results[0];
      if (data) {
        setMovie(data);
      }
      return;
    } catch (error) {
      handleAddError(error);
      console.log(error);
    }
  };
  useEffect(() => {
    if (query.length > 0) {
      searchMovies();
    }
  }, [query]);

  console.log("Navbar runnings");

  return (
    <WrapperContainer singlePage={false}>
      <div className="flex sticky top-0 bg-background-dark w-full h-14 items-center z-[100]">
        <div>
          <Link to="/">
            <img className="h-5" src={logo} alt="logo"></img>
          </Link>
        </div>
        <div className="flex justify-end w-full items-center overflow-visible">
          {/* navigation links */}
          <NavLink
            to="/"
            className="flex mx-4 font-lato text-sm whitespace-nowrap text-gray h-full"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Početna
          </NavLink>
          <NavLink
            to="/discovery"
            className="flex mx-4 font-lato text-sm whitespace-nowrap text-gray h-full"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Novo
          </NavLink>
          <FavoriteMovies></FavoriteMovies>
          {/* //search input */}
          <div className="flex z-[1] grow-[2] h-12 items-center mx-4">
            <div className="flex items-center w-full h-12 z-10 p-0 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="gray"
                className="w-4 h-4 ml-2 absolute"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>

              <input
                id="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                name="search"
                type="text"
                placeholder="Pretražite filmove ili serije"
                className="w-full font-lato text-white rounded text-sm py-1 bg-[#10161D] pl-8 outline-none"
              ></input>
            </div>
          </div>
          {/* navbar button */}
          <div className="flex min-w-[92px] items-center cursor-pointer ">
            <Button
              size="sm"
              variant="outlined"
              color="white"
              className="font-lato mr-4 text-sm normal-case font-light"
            >
              Prijava
            </Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-6 h-6 text-base m-0"
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
    </WrapperContainer>
  );
};

export default Navbar;
