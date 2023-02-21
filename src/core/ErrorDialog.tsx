import { useState, useContext } from "react";
import { Card, CardBody, CardFooter } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { InterceptorContext } from "./ErrorInterceptorContext";

const ErrorDialog = () => {
  const [open, setOpen] = useState<boolean>(true);
  const { error, handleRemoveError } = useContext<any | {}>(InterceptorContext);

  const closeModal = () => {
    setOpen(!open);
    handleRemoveError();
  };

  return (
    <div>
      {error && (
        <Card className="w-96 absolute right-4 top-16 z-10">
          <CardBody className="text-center bg-background-dark rounded-lg  w-full border-2 border-white">
            <div className="mb-2 w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                className="flex items-center mx-auto w-14 h-14"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p
              color="white"
              className="text-white font-lato text-base font-medium leading-6"
            >
              {error?.message}
            </p>
            <p
              color="white"
              className="text-white font-lato text-base font-medium leading-6"
            >
              {error?.response?.data?.status_message}
            </p>
          </CardBody>
          <CardFooter
            divider
            className="flex items-center justify-center py-4 bg-background-dark border-2 border-white"
          >
            <Button
              size="sm"
              className="bg-white text-background-dark rounded-xl"
              onClick={closeModal}
            >
              Close
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default ErrorDialog;
