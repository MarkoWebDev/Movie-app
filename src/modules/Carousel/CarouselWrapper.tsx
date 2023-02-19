import React from "react";
import Carousel from "./Carousel";
import { Button } from "@material-tailwind/react";
import { data } from "../../shared/data";

const CarouselWrapper = () => {
  const date: number = new Date().getFullYear();
  return (
    <div>
      <Carousel movieRow={false} show={2}>
        {/* first card */}
        {data.map((item) => {
          return (
            <div
              className="flex relative w-full bg-[#10161d] rounded-xl h-full overflow-hidden mr-2"
              key={item.id}
            >
              <div className="flex w-44">
                <img
                  src={item.image}
                  alt="image1"
                  className="w-full h-full rounded-tl-xl rounded-bl-xl"
                ></img>
                <div className="absolute right-0 bg-white border rounded-bl-2xl rounded-tr-2xl p-2">
                  <p className="text-sm font-lato whitespace-nowrap text-[#10161d] font-bold">
                    Postaje viralno
                  </p>
                </div>
              </div>
              <div className="text-white w-full flex flex-col ml-2 rounded-xl">
                <div>
                  <p className="text-sm font-lato whitespace-nowrap text-gray font-extralight pt-2">
                    {date} - 48min
                  </p>
                </div>
                <div className="py-4">
                  <h2 className="text-xl font-lato whitespace-nowrap text-white font-bold">
                    Zvjezdane staze: Picard
                  </h2>
                </div>
                <div>
                  <p className="text-sm font-lato whitespace-nowrap text-white font-medium ">
                    (Sezona 2)
                  </p>
                </div>
                <div className="py-4">
                  <Button
                    variant="outlined"
                    ripple={false}
                    color="gray"
                    className="text-white font-lato normal-case text-xs font-light text-ellipsis"
                  >
                    Gledaj sada
                  </Button>
                </div>
              </div>
              <div className="flex absolute bottom-0 w-1/2 bg-gradient-to-r from-yellow-600 via-orange-400 to-red-500  h-2">
                <span className="flex justify-end absolute -bottom-1 w-full ml-2">
                  🔥
                </span>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselWrapper;
