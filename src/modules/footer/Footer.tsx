import React, { useContext } from "react";
import { Button } from "@material-tailwind/react";
import useMediaQuery from "../../shared/MediaQueryHook/MediaQuery";
import { GlobalMovieContext } from "../../shared/GlobalContext/GlobalContext";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const { handleScroll } = useContext<any>(GlobalMovieContext);
  const isDesktop = useMediaQuery("(max-width: 1024px)");
  const isMobile = useMediaQuery("(max-width: 520px)");
  let { pathname } = useLocation();
  console.log("location", pathname);
  console.log("Footer running");
  return (
    <div className={pathname !== "/" ? "bg-background-dark" : "bg-black"}>
      <div className="flex justify-center flex-col items-center p-5">
        <span className={isDesktop ? "text-6xl mb-10 pt-4" : "text-7xl mb-10"}>
          👋
        </span>
        <p
          className={
            isDesktop
              ? "text-white font-lato text-3xl leading-10 font-black mb-4"
              : "text-white font-lato text-4xl leading-10 font-black mb-4"
          }
        >
          Sve ste pogledali!
        </p>
        <p
          className={
            isDesktop
              ? "text-[#c6c8cd] font-lato text-md text-center leading-7 mb-4"
              : "text-[#c6c8cd] font-lato text-xl text-center leading-7 mb-4"
          }
        >
          Još niste pronašli nešto što biste gledali? Isprobajte jednu od ovih
          opcija:
        </p>

        <div className="flex justify-center ">
          <Button
            size="sm"
            variant="filled"
            className="text-white font-medium	font-lato mr-4 text-sm normal-case text-ellipsis bg-[#4c5a67] overflow-hidden hover:bg-[#fbc500] duration-300"
          >
            Pogledajte što je novo
          </Button>

          <Button
            size="sm"
            variant="filled"
            className="text-white font-medium	font-lato mr-4 text-sm normal-case text-ellipsis bg-[#4c5a67] overflow-hidden hover:bg-[#fbc500] duration-300"
          >
            Pogledajte i filtrirajte
          </Button>
        </div>
        <p className="text-base	font-lato text-[#78a6b8] mt-10">
          Pokaži stare preporuke
        </p>
        <Button
          size="sm"
          variant="text"
          className={
            isMobile && pathname !== "/"
              ? "text-white font-medium	font-lato mr-4 text-sm normal-case border mt-4 border-orange-400 bg-transparent text-ellipsis overflow-hidden"
              : "hidden"
          }
          onClick={handleScroll}
        >
          Idi na vrh
        </Button>
      </div>
    </div>
  );
};

export default Footer;
