import React, { useState, useEffect } from "react";
import "../../index.css";

interface CarouselProps {
  children: any;
  show: number;
}

const Carousel = ({ children, show }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [display, setDisplay] = useState<boolean>(false);
  let length: number = children.length;

  const nextButton = () => {
    if (currentIndex < length - show) {
      setCurrentIndex((prev) => prev + 1);
    }
  };
  const prevButton = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div>
      <div
        className={`w-full flex relative h-48 mx-auto `}
        onMouseEnter={() => setDisplay(true)}
        onMouseLeave={() => setDisplay(false)}
      >
        <div className="flex w-full ">
          {/* prev button */}
          {display && currentIndex > 0 && (
            <button
              className="bg-black/70 rounded-md p-4 absolute left-0 h-full z-10 "
              onClick={prevButton}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={5}
                stroke="#78a6b8"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
          )}

          <div className="h-full overflow-hidden">
            <div
              style={{
                transform: `translateX(-${currentIndex * (100 / show)}%)`,
              }}
              className={`carousel-content show-${show}`}
            >
              {children}
            </div>
          </div>
          {/* next button */}
          <div className="relative ">
            <div className="bg-background-dark p-8 rounded-md absolute -right-6 -mt-4 h-56 blur"></div>
            {display && currentIndex < length - show && (
              <button
                onClick={nextButton}
                className="bg-black/70 rounded-md p-4 absolute right-0 h-full "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={5}
                  stroke="#78a6b8"
                  className="w-6 h-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
