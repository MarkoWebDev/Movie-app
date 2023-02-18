import React from "react";
import { Button } from "@material-tailwind/react";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-center flex-col items-center p-5">
        <span className="text-7xl mb-10">👋</span>
        <p className="text-white font-lato text-4xl leading-10 font-black mb-4">
          Sve ste pogledali!
        </p>
        <p className="text-[#c6c8cd] font-lato text-xl text-center leading-7 mb-4">
          Još niste pronašli nešto što biste gledali? Isprobajte jednu od ovih
          opcija:
        </p>

        <div className="flex justify-center ">
          <Button
            size="sm"
            variant="filled"
            className="text-white font-medium	font-lato mr-4 text-sm normal-case text-ellipsis bg-[#4c5a67] overflow-hidden hover:bg-[#fbc500] duration-300"
          >
            Pogledajte što je novo
          </Button>
          <Button
            size="sm"
            variant="filled"
            className="text-white font-medium	font-lato mr-4 text-sm normal-case text-ellipsis bg-[#4c5a67] overflow-hidden hover:bg-[#fbc500] duration-300"
          >
            Pogledajte i filtrirajte
          </Button>
        </div>
        <p className="text-base	font-lato text-[#78a6b8] mt-10">
          Pokaži stare preporuke
        </p>
      </div>
    </div>
  );
};

export default Footer;
