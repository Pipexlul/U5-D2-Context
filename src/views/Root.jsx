import { useState, useReducer } from "react";
import { Outlet } from "react-router-dom";

import AppContext from "../contexts/appContext";

const Root = () => {
  const reducerFunc = (state, action) => {
    switch (action.type) {
      case "ADD_FAVORITE":
        return [...state, action.payload];

      case "REMOVE_FAVORITE":
        return state.filter((fav) => fav.id !== action.payload);

      case "RESET_FAVORITES":
        return [];

      default:
        return state;
    }
  };

  const [favorites, favoritesDispatch] = useReducer(reducerFunc, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <AppContext.Provider value={{ favorites, favoritesDispatch }}>
        <Navbar />
        <Outlet />
        <Footer />
      </AppContext.Provider>
    </div>
  );
};

export default Root;
