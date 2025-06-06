import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./Components/MainLayout";
import { Home } from "./pages/Home";
import { FetchOld } from "./pages/FetchOld";
import { FetchRq } from "./pages/FetchRq";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/trad",
        element: <FetchOld />,
      },
      {
        path: "rq",
        element: <FetchRq />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={Routes}>React Query</RouterProvider>;
};
export default App;
