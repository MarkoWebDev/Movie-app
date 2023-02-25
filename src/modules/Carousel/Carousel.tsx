import React, { useState, useEffect } from "react";
import "../../index.css";
import useMediaQuery from "../../shared/MediaQueryHook/MediaQuery";

interface CarouselProps {
  children: any;
  show: number;
  movieRow: boolean;
}

const Carousel = ({ children, show, movieRow }: CarouselProps) => {
  const getWindowSize = () => {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  };
  const isMobile = useMediaQuery("(max-width: 850px)");
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [display, setDisplay] = useState<boolean>(false);
  let length: number = children.length;

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [length]);

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

  let carouselDisplay;

  if (windowSize.innerWidth <= 1260 && windowSize.innerWidth > 721) {
    show = 2;
    carouselDisplay = `show-${show}`;
  } else if (windowSize.innerWidth <= 640 && windowSize.innerWidth > 0) {
    show = 1;
    carouselDisplay = `show-${show}`;
  } else {
    carouselDisplay = `show-${show}`;
  }

  return (
    <div>
      <div
        className={`${
          movieRow
            ? "w-full flex relative h-64 mx-auto"
            : "w-full flex relative h-44 mx-auto"
        } `}
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
              className={`carousel-content show-${show} ${carouselDisplay}`}
            >
              {children}
            </div>
          </div>
          {/* next button */}
          <div className="relative ">
            <div
              className={
                isMobile
                  ? "bg-background-dark p-8 rounded-md absolute -right-4 -mt-2 h-56 blur"
                  : "bg-background-dark p-8 rounded-md absolute -right-6 -mt-4 h-56 blur"
              }
            ></div>
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
