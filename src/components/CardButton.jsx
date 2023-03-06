import { useContext } from "react";

import AppContext from "../contexts/appContext";

const CardButton = ({ linkedId }) => {
  const { favorites, favoritesDispatch } = useContext(AppContext);

  const isFavorited = favorites.includes(linkedId);

  const handleClick = () => {
    if (isFavorited) {
      favoritesDispatch({ type: "REMOVE_FAVORITE", payload: linkedId });
    } else {
      favoritesDispatch({ type: "ADD_FAVORITE", payload: linkedId });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`transition-all mt-4 font-bold py-2 px-4 rounded ${
        isFavorited
          ? "bg-emerald-500 text-black hover:bg-red-500"
          : "bg-transparent text-white hover:bg-emerald-500 hover:text-black"
      }`}
    >
      {isFavorited ? "Quitar de favoritos" : "Agregar a favoritos"}
    </button>
  );
};

export default CardButton;
