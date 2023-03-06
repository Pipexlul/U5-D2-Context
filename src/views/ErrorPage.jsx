import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const errorMsg = useRouteError();

  return (
    <div className="grid h-screen px-4 place-content-center bg-gray-900">
      <div className="text-center">
        <h2 className="font-black text-xl md:text-3xl lg:text-9xl text-gray-700">
          {errorMsg && errorMsg.length
            ? errorMsg
            : "Lo lamentamos, hubo un error :("}
        </h2>

        <Link
          to={"/home"}
          className="inline-block px-5 py-3 mt-20 text-sm font-medium text-white bg-emerald-600 rounded hover:bg-emerald-700 focus:outline-none focus:ring transition"
        >
          Ir a página principal
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
