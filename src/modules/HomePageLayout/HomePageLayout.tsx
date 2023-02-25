import React from "react";
import homeHeader from "../../assets/images/homeHeader.png";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import useMediaQuery from "../../shared/MediaQueryHook/MediaQuery";

const HomePageLayout = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  return (
    <div className="relative text-center bg-gradient-to-t from-[#060d17] via-[#5e6b76] to-[#5e6b76] ">
      <div className="relative text-center">
        <img
          className="h-screen w-full mix-blend-overlay"
          src={homeHeader}
          alt="homePage"
        ></img>
        <div className="absolute top-[30%] right-1/2 translate-x-2/4 ">
          <div>
            <p
              className={
                isMobile
                  ? "text-white font-lato font-black text-4xl w-[350px]"
                  : "text-white font-lato font-black text-6xl "
              }
            >
              Vaš vodič za streaming filmovi, TV serije i sport
            </p>
            <p
              className={
                isMobile
                  ? "font-lato text-sm font-normal  text-[#999c9f] leading-normal pt-8 w-[350px]"
                  : "font-lato text-xl font-normal whitespace-nowrap text-[#999c9f] leading-normal pt-8"
              }
            >
              Uz JustWatch pronađite gdje streamati nove, popularne i nadolazeće
              sadržaje.
            </p>
          </div>
          <div
            className={
              isMobile
                ? "flex flex-col items-center justify-center pt-8 w-full"
                : "flex items-center justify-center pt-8"
            }
          >
            <div>
              <Link to="/discovery">
                <Button
                  size="sm"
                  variant="filled"
                  ripple={false}
                  className={
                    isMobile
                      ? "text-black font-medium px-6 py-4	font-lato mr-4 text-base normal-case rounded-lg text-ellipsis bg-[#fbc500] overflow-hidden"
                      : "text-black font-medium px-16 py-4	font-lato mr-4 text-base normal-case rounded-lg text-ellipsis bg-[#fbc500] overflow-hidden"
                  }
                >
                  Otkrijte filmove i serije
                </Button>
              </Link>
            </div>
            <div>
              <Button
                size="sm"
                variant="outlined"
                color="gray"
                ripple={false}
                className={
                  isMobile
                    ? "text-white font-medium px-6 py-4 mt-4 font-lato text-base normal-case rounded-lg text-ellipsis bg-transparent overflow-hidden"
                    : "text-white font-medium px-8 py-4  font-lato text-base normal-case rounded-lg text-ellipsis bg-transparent overflow-hidden"
                }
              >
                Značajke
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageLayout;
