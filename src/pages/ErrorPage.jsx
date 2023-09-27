import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  const error = useRouteError();
  let message = "Something went wrong!";

  if (error.status === 500) {
    message = error.data;
  }

  if (error.status === 404) {
    message = error.data;
  }

  return (
    <>
      <MainNavigation />
      <h1>Oops</h1>
      <p>{message}</p>
    </>
  );
}

export default ErrorPage;
