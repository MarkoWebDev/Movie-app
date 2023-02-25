import React from "react";
import useMediaQuery from "../../shared/MediaQueryHook/MediaQuery";

interface WrappperProps {
  children: any;
  singlePage: boolean;
}

const WrapperContainer = ({ children, singlePage }: WrappperProps) => {
  const isDesktop = useMediaQuery("(max-width: 1024px)");

  return (
    <div
      className={`${
        singlePage
          ? "flex justify-center items-center w-full pb-4 h-full "
          : "pl-16 pr-16 w-full pb-4"
          ? isDesktop
            ? "px-4 w-full"
            : "pl-16 pr-16 w-full pb-4"
          : "pl-16 pr-16 w-full pb-4"
      } `}
    >
      {children}
    </div>
  );
};

export default WrapperContainer;
