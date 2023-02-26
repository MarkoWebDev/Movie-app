import React from "react";
import netflixLogo from "../../assets/images/netflix.webp";
import primeLogo from "../../assets/images/prime.webp";
import icon from "../../assets/images/icon.webp";
import WrapperContainer from "../../shared/WrapperContainer/WrapperContainer";
import { useLocation } from "react-router-dom";
import useMediaQuery from "../../shared/MediaQueryHook/MediaQuery";

const HeroHeader = () => {
  const months: string[] = [
    "Sij",
    "Velj",
    "Ozu",
    "Trav",
    "Svi",
    "Lip",
    "Srp",
    "Kol",
    "Ruj",
    "Lis",
    "Stu",
    "Pro",
  ];
  let { pathname } = useLocation();
  const day: number = new Date().getDate();
  const month: number = new Date().getMonth();
  const isMobile = useMediaQuery("(max-width: 520px)");
  const isTablet = useMediaQuery("(max-width: 540px)");

  return (
    <div>
      <WrapperContainer singlePage={false}>
        {pathname === "/discovery" && (
          <div
            className={
              isMobile
                ? "flex w-full justify-between items-center pt-2"
                : "flex w-full justify-between items-center pt-12"
            }
          >
            {/* left side with date */}
            <div className="flex items-center">
              <p
                className={
                  isMobile
                    ? "text-white font-lato font-black text-lg leading-10 "
                      ? isTablet
                        ? "text-white font-lato font-black text-lg leading-10 "
                        : "text-white font-lato font-black text-4xl leading-10"
                      : "text-white font-lato font-black text-4xl leading-10 "
                    : "text-white font-lato font-black text-4xl leading-10"
                }
              >
                Discover daily
              </p>
              <div className="flex flex-col w-12 h-12 justify-center box-border ml-4">
                <div>
                  <p className="text-white font-lato bg-[#eb3b5a] font-bold uppercase text-center text-[10px] rounded-t-lg">
                    {months[month]}
                  </p>
                  <p className="text-black font-lato text-lg leading-6 font-medium bg-white text-center rounded-b-lg">
                    {day}
                  </p>
                </div>
              </div>
            </div>
            {/* {images on the right side} */}
            <div className="flex items-center">
              <div className="flex items-center justify-center h-8 w-8 border-2 rounded-lg text-[#4c5a67] border-[#4c5a67] text-center cursor-pointer">
                +
              </div>
              <div className="flex items-center">
                <img
                  className="h-8 w-full rounded-lg ml-4"
                  src={netflixLogo}
                  alt="netflix-logo"
                ></img>
                <img
                  className="h-8 w-full mx-4 rounded-lg"
                  src={primeLogo}
                  alt="prime-logo"
                ></img>
                <img
                  className="h-8 w-full rounded-lg"
                  src={icon}
                  alt="icon"
                ></img>
              </div>
            </div>
          </div>
        )}
        {pathname === "/novo" && (
          <div className="pt-8">
            <h1 className="text-white font-lato font-semibold text-xl leading-10 py-2">
              Novi i nedavno dodani filmovi i serije
            </h1>
            <p
              className={
                isMobile
                  ? "text-[#b9bdcc] font-lato text-sm font-medium"
                  : " text-[#b9bdcc] font-lato text-base font-medium"
              }
            >
              Odaberite omiljenog pružatelja usluga i ne propustite izlaske
              novih filmova ili epizoda vaših omiljenih serija. Uz JustWatch
              budite uvijek u tijeku. Što je novo na Netflixu, HBO Nordicsu ili
              Viaplayu? Uvijek ćete prvi doznati. Koristite filtere i odaberite
              omiljenu streaming platformu, žanr ili godinu izdanja. Naš
              Watchbar zapamtit će vaše postavke.
            </p>
            <div className="flex items-center pt-4">
              <div
                className={
                  isMobile
                    ? "flex items-center justify-center h-8 w-8 border-2 rounded-lg text-[#4c5a67] border-[#4c5a67] text-center cursor-pointer"
                    : "flex items-center justify-center h-12 w-12 border-2 rounded-lg text-[#4c5a67] border-[#4c5a67] text-center cursor-pointer"
                }
              >
                +
              </div>
              <div className="flex items-center">
                <img
                  className={
                    isMobile
                      ? "h-8 w-full rounded-lg ml-4 cursor-pointer"
                      : "h-12 w-full rounded-lg ml-4 cursor-pointer"
                  }
                  src={netflixLogo}
                  alt="netflix-logo"
                ></img>
                <img
                  className={
                    isMobile
                      ? "h-8 w-full rounded-lg mx-4 cursor-pointer"
                      : "h-12 w-full rounded-lg mx-4 cursor-pointer"
                  }
                  src={primeLogo}
                  alt="prime-logo"
                ></img>
                <img
                  className={
                    isMobile
                      ? "h-8 w-full rounded-lg cursor-pointer"
                      : "h-12 w-full rounded-lg cursor-pointer"
                  }
                  src={icon}
                  alt="icon"
                ></img>
              </div>
            </div>
          </div>
        )}
      </WrapperContainer>
    </div>
  );
};

export default HeroHeader;
