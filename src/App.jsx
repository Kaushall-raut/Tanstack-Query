import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./Components/MainLayout";
import { Home } from "./pages/Home";
import { FetchOld } from "./pages/FetchOld";
import { FetchRq } from "./pages/FetchRq";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
        path: "/oldMethod",
        element: <FetchOld />,
      },
      {
        path: "reactquery",
        element: <FetchRq />,
      },
    ],
  },
]);

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={Routes}>React Query</RouterProvider>
    </QueryClientProvider>
  );
};
export default App;
