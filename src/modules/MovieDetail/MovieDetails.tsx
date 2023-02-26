import React, { useContext } from "react";
import { GlobalMovieContext } from "../../shared/GlobalContext/GlobalContext";
import WrapperContainer from "../../shared/WrapperContainer/WrapperContainer";
import { Button } from "@material-tailwind/react";
import useMediaQuery from "../../shared/MediaQueryHook/MediaQuery";

const MovieDetails = () => {
  const isMobile = useMediaQuery("(max-width: 830px)");
  const isDesktop = useMediaQuery("(max-width: 831px)");
  const { state, addToFavorites } = useContext<any>(GlobalMovieContext);
  const url = "https://image.tmdb.org/t/p/original/";

  const convertDate = (date: string) => {
    let year = date?.slice(0, 4);
    let month = date?.slice(5, 7);
    let day = date?.slice(8, 10);
    return `${day}.${month}.${year}`;
  };
  return (
    <div>
      <WrapperContainer singlePage={true}>
        <div
          className={
            isMobile
              ? "flex flex-col justify-center items-center"
              : "flex justify-center items-center w-full"
          }
        >
          <div
            className={
              isMobile
                ? "w-full flex justify-center items-center"
                : "flex flex-col h-full justify-center w-[700px] bg-background-dark "
            }
          >
            <div className="flex w-full justify-center items-center mx-auto">
              <div>
                <img
                  className={
                    isMobile
                      ? "h-screen w-full bg-background-dark bg-center bg-no-repeat bg-cover rounded-md "
                      : "h-screen w-[900px] bg-background-dark bg-center bg-no-repeat bg-cover rounded-md "
                      ? isDesktop
                        ? "h-screen w-[900px] bg-background-dark bg-center bg-no-repeat bg-cover rounded-md "
                        : ""
                      : ""
                  }
                  src={`${url}${
                    state?.movieDetails?.poster_path ||
                    state?.movieDetails?.backdrop_path
                  } `}
                  alt={state?.movieDetails?.title}
                ></img>
              </div>
            </div>
          </div>
          <div
            className={
              isMobile
                ? "flex w-full bg-background-dark border border-white rounded-t-md p-4"
                : "flex -translate-x-6 -translate-y-6 bg-background-dark border border-white rounded-t-md w-[900px] p-4"
            }
          >
            <div className="flex flex-col ">
              <img
                className={
                  isMobile
                    ? "w-full hidden"
                    : "h-full w-full bg-center bg-no-repeat bg-cover rounded-md "
                }
                src={`${url}${
                  state?.movieDetails?.poster_path ||
                  state?.movieDetails?.backdrop_path
                } `}
                alt={state?.movieDetails?.title}
              ></img>
              <div
                className={
                  isMobile
                    ? "flex flex-col justify-end items-start pt-4"
                    : "pt-4 "
                    ? isDesktop
                      ? "flex flex-col items-center text-center w-full"
                      : "pt-4"
                    : "pt-4"
                }
              >
                <p
                  className={
                    isDesktop
                      ? "text-[#78a6b8] font-lato font-medium text-xs leading-4 pb-4 uppercase"
                      : "text-[#78a6b8] font-lato font-medium text-sm leading-4 pb-4 uppercase"
                  }
                >
                  ocjena{" "}
                  <span
                    className={
                      isMobile
                        ? "text-white font-lato font-medium text-xs leading-4 pb-4 uppercase pl-0"
                        : "text-white font-lato font-medium text-sm leading-4 pb-4 uppercase pl-4"
                    }
                  >
                    {state?.movieDetails?.vote_average}
                  </span>
                </p>
                <p
                  className={
                    isDesktop
                      ? "text-[#78a6b8] font-lato font-medium text-xs leading-4 pb-4 uppercase"
                      : "text-[#78a6b8] font-lato font-medium text-sm leading-4 pb-4 uppercase"
                  }
                >
                  popularity{" "}
                  <span
                    className={
                      isMobile
                        ? "text-white font-lato font-medium text-xs leading-4 pb-4 uppercase pl-0"
                        : "text-white font-lato font-medium text-sm leading-4 pb-4 uppercase pl-4"
                    }
                  >
                    {state?.movieDetails?.popularity}
                  </span>
                </p>
                <p
                  className={
                    isDesktop
                      ? "text-[#78a6b8] font-lato font-medium text-xs leading-4 pb-4 uppercase"
                      : "text-[#78a6b8] font-lato font-medium text-sm leading-4 pb-4 uppercase"
                  }
                >
                  vote{" "}
                  <span
                    className={
                      isMobile
                        ? "text-white font-lato font-medium text-xs leading-4 pb-4 uppercase pl-0"
                        : "text-white font-lato font-medium text-sm leading-4 pb-4 uppercase pl-4"
                    }
                  >
                    {state?.movieDetails?.vote_count}
                  </span>
                </p>
                <p
                  className={
                    isDesktop
                      ? "text-[#78a6b8] font-lato font-medium text-xs leading-4 pb-4 uppercase"
                      : "text-[#78a6b8] font-lato font-medium text-sm leading-4 pb-4 uppercase"
                  }
                >
                  Adult
                  <span
                    className={
                      isMobile
                        ? "text-white font-lato font-medium text-xs leading-4 pb-4 uppercase pl-0"
                        : "text-white font-lato font-medium text-sm leading-4 pb-4 uppercase pl-4"
                    }
                  >
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
                <p
                  className={
                    isMobile
                      ? "text-sm w-full text-white font-lato font-normal pb-4"
                      : "text-white font-lato font-normal text-xl pb-4 w-[450px] max-w-[900px] "
                  }
                >
                  {state?.movieDetails?.overview}
                </p>
              </div>
              {state?.favorites?.map((item: any) => {
                if (item?.id === state?.movieDetails?.id) {
                  return (
                    <div className="pb-4 " key={item.id}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#F28713"
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    </div>
                  );
                }
              })}
              <Button
                onClick={() => addToFavorites(state?.movieDetails)}
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
        </div>
      </WrapperContainer>
    </div>
  );
};

export default MovieDetails;
