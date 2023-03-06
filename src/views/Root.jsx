import { useState, useReducer } from "react";
import { Outlet } from "react-router-dom";

import AppContext from "../contexts/appContext";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { decrypt } from "../utils/secretUtils";

const PEXELS_API_ENCRYPTED =
  "6b653d54262a11021a153a2e233d0f5606040b2f343a27212b252a16195b2c0c553514464a0c21553a03225c103d115e29311d315a0a2d3d";

const Root = () => {
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

  const linkData = [
    {
      label: "Home",
      path: "/home",
    },
    {
      label: "Buscar",
      path: "/browse",
    },
    {
      label: "Favoritos",
      path: "/favorites",
    },
  ];

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
    <div className="flex flex-col min-h-screen bg-gray-900">
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
        <Navbar
          header="Forest Collection"
          headerGradient="bg-gradient-to-r from-emerald-300 via-orange-300 to-emerald-300"
          bgLinkColor="bg-fuchsia-600"
          textLinkColor="text-fuchsia-400"
          navLinks={linkData}
        />
        <Outlet />
        <Footer />
      </AppContext.Provider>
    </div>
  );
};

export default Root;
