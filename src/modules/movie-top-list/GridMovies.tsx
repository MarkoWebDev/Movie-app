import React from "react";
import WrapperContainer from "../../shared/WrapperContainer/WrapperContainer";
import { gridData } from "../../shared/data";
import { platforms } from "../../shared/data";

const GridMovies = () => {
  console.log("GridMovies running");
  return (
    <WrapperContainer singlePage={false}>
      <div>
        <h3 className="text-white font-lato font-black text-3xl leading-10 pb-4">
          Današnja top-lista
        </h3>
        <div className="grid grid-cols-3 justify-items-start">
          {platforms.map((platform) => {
            return (
              <div className="flex items-center pb-4" key={platform.id}>
                <img
                  className="h-14 z-10 rounded-xl"
                  src={platform.image}
                  alt={platform.name}
                ></img>
                <p className="font-lato font-bold text-white overflow-hidden text-lg leading-6 ml-4">
                  {platform.name}
                </p>
              </div>
            );
          })}
          {gridData.map((item) => {
            return (
              <div className="ml-6 my-2" key={item.id}>
                <div className="flex items-center relative ">
                  <span className="absolute scale-150 text-[#222c38] font-lato -left-6 text-4xl font-bold">
                    {item.number}
                  </span>
                  <img
                    className="h-16 z-10 rounded-sm"
                    src={item.image}
                    alt={item.name}
                  ></img>
                  <div className="ml-4">
                    <p className="font-lato font-bold text-white overflow-hidden text-base leading-6">
                      {item.name}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default GridMovies;
