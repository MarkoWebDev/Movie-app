import React from "react";
import WrapperContainer from "../../shared/WrapperContainer/WrapperContainer";
import CarouselWrapper from "../Carousel/CarouselWrapper";

const HeroCarousel = () => {
  console.log("HeroCarousel running");
  return (
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
  );
};

export default HeroCarousel;
