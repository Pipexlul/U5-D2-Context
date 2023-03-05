import { createHashRouter, RouterProvider, Navigate } from "react-router-dom";

// Views
import Root from "./views/Root";
import Home from "./views/Home";
import Browse from "./views/Browse";
import Favorites from "./views/Favorites";
import ErrorPage from "./views/ErrorPage";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace={true} />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
