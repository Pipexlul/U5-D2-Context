import { useContext } from "react";

import CardGrid from "../components/CardGrid";

import AppContext from "../contexts/appContext";

const Favorites = () => {
  const { favorites, firstTimeLoaded, imagesData } = useContext(AppContext);

  return (
    <main className="bg-gray-900">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        {!firstTimeLoaded ? (
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Primero, haga click en el tab de "Buscar" para cargar las imágenes
            iniciales
          </h2>
        ) : !favorites.length ? (
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¡No tienes favoritos, anda a la tab de "Buscar" para seleccionar
            algunos!
          </h2>
        ) : (
          <CardGrid
            images={imagesData.filter((imgData) =>
              favorites.includes(imgData.id)
            )}
          />
        )}
      </div>
    </main>
  );
};

export default Favorites;
