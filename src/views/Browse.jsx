import { useEffect, useContext } from "react";

import AppContext from "../contexts/appContext";

import CardGrid from "../components/CardGrid";
import LoadingSpinner from "../components/LoadingSpinner";

const Browse = () => {
  const { firstTimeLoaded, setFirstTimeLoaded, imagesData, getImages } =
    useContext(AppContext);

  useEffect(() => {
    if (!firstTimeLoaded) {
      getImages();
      setFirstTimeLoaded(true);
    }
  }, []);

  return (
    <main className="bg-gray-900">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        {imagesData.length ? (
          <CardGrid images={imagesData} />
        ) : (
          <div className="flex flex-col justify-center items-center gap-y-4">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Cargando imágenes...
            </h2>

            <LoadingSpinner
              fillColor="fill-orange-400"
              width="w-10"
              height="h-10"
            />
          </div>
        )}
      </div>
    </main>
  );
};

export default Browse;
