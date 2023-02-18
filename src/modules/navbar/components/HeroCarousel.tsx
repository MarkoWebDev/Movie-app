import React from "react";
import WrapperContainer from "../../../shared/WrapperContainer";
import CarouselWrapper from "../../Carousel/CarouselWrapper";

const HeroCarousel = () => {
  return (
    <WrapperContainer>
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
