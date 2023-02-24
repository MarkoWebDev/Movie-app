import React from "react";
import WrapperContainer from "../../shared/WrapperContainer/WrapperContainer";
import CarouselWrapper from "../Carousel/CarouselWrapper";
import useMediaQuery from "../../shared/MediaQueryHook/MediaQuery";


const HeroCarousel = () => {
  const isLargeDesktop = useMediaQuery("(max-width: 1500px)");
  const isDesktop = useMediaQuery("(max-width: 1024px)");
  console.log("HeroCarousel running");
  return (
    <div>
      {isLargeDesktop ? (
        <div>
          <div
            className={
              isDesktop
                ? "px-2 w-full"
                : "pl-16 pr-16 w-full max-w-[1900px] pb-4"
            }
          >
            <div className={isLargeDesktop ? "flex flex-col w-full px-2 " : ""}>
              <div className="overflow-hidden mr-4 pt-4 pb-4">
                <CarouselWrapper></CarouselWrapper>
              </div>
              <div className="overflow-hidden">
                <CarouselWrapper></CarouselWrapper>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <WrapperContainer singlePage={false}>
          <div className="flex ">
            <div className="overflow-hidden mr-4">
              <CarouselWrapper></CarouselWrapper>
            </div>
            <div className="overflow-hidden">
              <CarouselWrapper></CarouselWrapper>
            </div>
          </div>
        </WrapperContainer>
      )}
    </div>
  );
};

export default HeroCarousel;
