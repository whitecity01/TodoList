import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TodoLayout, { loader as todosLoader } from "./pages/TodoLayout";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/", 
    element: <RootLayout />, 
    errorElement: <ErrorPage />, 
    children: [  
      { index: true, element: <HomePage /> },
      {
        path: "todos",
        element: <TodoLayout />,
        loader: todosLoader,
      },
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;