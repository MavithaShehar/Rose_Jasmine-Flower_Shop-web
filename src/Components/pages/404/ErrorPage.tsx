import {  useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();


  return (
    <div className="min-h-screen flex items-center justify-center text-black">
      <div className="max-w-2xl text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-8">
          Oops! {error.statusText || error.message}
        </p>
        <p className="text-lg mb-4">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        {/* <butto
          style="bg-teal-700 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          children="Go to Homepage"
          onClick={handleHomePageNavigaion}
        /> */}
      </div>
    </div>
  );
}