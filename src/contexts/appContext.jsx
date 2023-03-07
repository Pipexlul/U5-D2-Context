import { createContext, useState, useReducer } from "react";

import { decrypt } from "../utils/secretUtils";

const PEXELS_API_ENCRYPTED =
  "6b653d54262a11021a153a2e233d0f5606040b2f343a27212b252a16195b2c0c553514464a0c21553a03225c103d115e29311d315a0a2d3d";

const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
  const reducerFunc = (state, action) => {
    switch (action.type) {
      case "ADD_FAVORITE":
        return [...state, action.payload];

      case "REMOVE_FAVORITE":
        return state.filter((id) => id !== action.payload);

      case "RESET_FAVORITES":
        return [];

      default:
        return state;
    }
  };

  const [imagesData, setImagesData] = useState([]);
  const [favorites, favoritesDispatch] = useReducer(reducerFunc, []);

  const [firstTimeLoaded, setFirstTimeLoaded] = useState(false);

  const getImages = async () => {
    try {
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=forest&per_page=30`,
        {
          headers: {
            Authorization: decrypt(PEXELS_API_ENCRYPTED),
          },
        }
      );

      if (!response.ok) {
        throw new Error("No se pudo obtener las imagenes desde Pexels");
      }

      const data = await response.json();
      setImagesData(data.photos);
    } catch (error) {
      throw error;
    }
  };

  return (
    <AppContext.Provider
      value={{
        favorites,
        favoritesDispatch,
        firstTimeLoaded,
        setFirstTimeLoaded,
        imagesData,
        getImages,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
export { AppContextProvider };
