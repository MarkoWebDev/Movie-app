import React, { useContext, useEffect } from "react";
import { GlobalMovieContext } from "../shared/GlobalContext/GlobalContext";
import Navbar from "../modules/navbar/Navbar";
import Footer from "../modules/footer/Footer";
import WrapperContainer from "../shared/WrapperContainer/WrapperContainer";
import { Button } from "@material-tailwind/react";

const SingleMoviePage = () => {
  const { state} = useContext<any>(GlobalMovieContext);
  const url = "https://image.tmdb.org/t/p/original/";

  console.log("singlePage", state.movieDetails);

  useEffect(() => {
    localStorage.setItem("singleMovie", JSON.stringify(state.movieDetails));
  }, [state.movieDetails]);

  const convertDate = (date: string) => {
    let year = date.slice(0, 4);
    let month = date.slice(5, 7);
    let day = date.slice(8, 10);
    return `${day}.${month}.${year}`;
  };

  return (
    <div>
      <Navbar></Navbar>
      <WrapperContainer singlePage={true}>
        <div className="flex flex-col h-full justify-center w-[700px] bg-background-dark">
          <div className="flex w-full justify-center items-center mx-auto">
            <div>
              <img
                className="h-screen w-[900px] bg-background-dark bg-center bg-no-repeat bg-cover rounded-md "
                src={`${url}${
                  state?.movieDetails?.poster_path ||
                  state?.movieDetails?.backdrop_path
                } `}
                alt={state?.movieDetails?.title}
              ></img>
            </div>
          </div>
        </div>
        <div className="flex -translate-x-6 -translate-y-6 bg-background-dark border border-white rounded-t-md w-[900px] p-4">
          <div className="flex flex-col ">
            <img
              className="h-full w-[450px] bg-center bg-no-repeat bg-cover rounded-md "
              src={`${url}${
                state?.movieDetails?.poster_path ||
                state?.movieDetails?.backdrop_path
              } `}
              alt={state?.movieDetails?.title}
            ></img>
            <div className="pt-4 ">
              <p className="text-[#78a6b8] font-lato font-medium text-sm leading-4 pb-4 uppercase">
                ocjena{" "}
                <span className="text-white font-lato font-medium text-sm leading-4 pb-4 uppercase pl-4">
                  {state?.movieDetails?.vote_average}
                </span>
              </p>
              <p className="text-[#78a6b8] font-lato font-medium text-sm leading-4 pb-4 uppercase">
                popularity{" "}
                <span className="text-white font-lato font-medium text-sm leading-4 pb-4 uppercase pl-4">
                  {state?.movieDetails?.popularity}
                </span>
              </p>
              <p className="text-[#78a6b8] font-lato font-medium text-sm leading-4 pb-4 uppercase">
                vote{" "}
                <span className="text-white font-lato font-medium text-sm leading-4 pb-4 uppercase pl-4">
                  {state?.movieDetails?.vote_count}
                </span>
              </p>
              <p className="text-[#78a6b8] font-lato font-medium text-sm leading-4 uppercase">
                Adult
                <span className="text-white font-lato font-medium text-sm leading-4 uppercase pl-4">
                  {state?.movieDetails?.adult ? "18+" : "12+"}
                </span>
              </p>
            </div>
          </div>
          <div className="pl-4">
            <h4 className="text-[#78a6b8] font-lato font-black text-4xl leading-10 pb-4 cursor-pointer hover:text-white">
              {state?.movieDetails?.title ||
                state?.movieDetails?.original_title}
            </h4>
            <p className="text-[#78a6b8] font-lato font-medium text-sm leading-4 uppercase">
              Release date{" "}
              <span className="text-white font-lato font-medium text-sm leading-4 uppercase pl-4">
                {convertDate(state?.movieDetails?.release_date).toString()}
              </span>
            </p>
            <div className="pt-6">
              <p className="text-white font-lato font-normal text-xl pb-4 w-[450px] max-w-[900px] ">
                {state?.movieDetails?.overview}
              </p>
            </div>
            <Button
              variant="outlined"
              size="sm"
              ripple={false}
              className="flex items-center text-yellow-800  border border-yellow-800 text-xs normal-case outline-none"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mr-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
              </span>
              Moja lista
            </Button>
          </div>
        </div>
      </WrapperContainer>
      <Footer></Footer>
    </div>
  );
};

export default SingleMoviePage;
