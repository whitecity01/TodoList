import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import TodoTemplate from "./pages/TodoTemplate";
import { loader as todosLoader } from "./pages/TodoTemplate";

const router = createBrowserRouter([
  {
    path: "/", //경로
    element: <RootLayout />, //컴포넌트 요소
    errorElement: <ErrorPage />, //에러 처리 컴포넌트
    children: [  
      { index: true, element: <HomePage /> }, //초기 index 페이지 설정 유무 및 컴포넌트
      {
        path: "todos",
        element: <TodoTemplate />,
        loader: todosLoader,
      },
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;