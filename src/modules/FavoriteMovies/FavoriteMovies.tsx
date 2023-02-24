import React, { useContext } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { GlobalMovieContext } from "../../shared/GlobalContext/GlobalContext";

const FavoriteMovies = () => {
  //base URL
  const url = "https://image.tmdb.org/t/p/original/";
  const { state, removeFromFavorites } = useContext<any>(GlobalMovieContext);

  return (
    <div>
      {" "}
      <Menu>
        <MenuHandler>
          <p className="flex mx-4 font-lato text-sm whitespace-nowrap text-gray h-full cursor-pointer">
            Moja lista
          </p>
        </MenuHandler>
        <MenuList className="bg-background-dark">
          {state?.favorites?.length > 0 ? (
            <div>
              {state?.favorites?.map((item: any) => {
                return (
                  <div key={item.id}>
                    <MenuItem className="flex bg-background-dark justify-between items-center outline-none  hover:bg-transparent border-0">
                      <div className="outline-none hover:border-0">
                        {" "}
                        <img
                          className="h-16 w-14 bg-center bg-no-repeat bg-cover rounded-md "
                          src={`${url}${
                            item?.poster_path || item?.backdrop_path
                          } `}
                          alt={item?.original_title}
                        ></img>
                      </div>
                      <div>
                        <p
                          onClick={() => removeFromFavorites(item.id)}
                          className="text-[#78a6b8] font-lato font-medium text-xs leading-4 "
                        >
                          Remove
                        </p>
                      </div>
                    </MenuItem>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-[#78a6b8] font-lato font-medium text-xs leading-4 ">
              Add favorites
            </p>
          )}
        </MenuList>
      </Menu>
    </div>
  );
};

export default FavoriteMovies;
