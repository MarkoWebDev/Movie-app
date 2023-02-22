import React from "react";

interface WrappperProps {
  children: any;
  singlePage: boolean;
}

const WrapperContainer = ({ children, singlePage }: WrappperProps) => {
  return (
    <div
      className={`${
        singlePage
          ? "flex  justify-center items-center w-full pb-4 h-full "
          : "pl-16 pr-16 w-full max-w-[1900px] pb-4"
      } `}
    >
      {children}
    </div>
  );
};

export default WrapperContainer;
