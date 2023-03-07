import { Outlet } from "react-router-dom";

import { AppContextProvider } from "../contexts/appContext";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Root = () => {
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

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <AppContextProvider>
        <Navbar
          header="Forest Collection"
          headerGradient="bg-gradient-to-r from-emerald-300 via-orange-300 to-emerald-300"
          bgLinkColor="bg-fuchsia-600"
          textLinkColor="text-fuchsia-400"
          navLinks={linkData}
        />
        <Outlet />
        <Footer />
      </AppContextProvider>
    </div>
  );
};

export default Root;
