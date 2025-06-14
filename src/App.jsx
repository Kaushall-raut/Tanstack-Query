import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./Components/MainLayout";
import { Home } from "./pages/Home";
import { FetchOld } from "./pages/FetchOld";
import { FetchRq } from "./pages/FetchRq";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

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
      {
        //like use context hook you also need to wrap it so other components can access its function
      }
      <TanStackRouterDevtools />{" "}
      {
        //this will activate the dev tool option on the browser which help to understand the working of the tanstack
      }
      <RouterProvider router={Routes}>React Query</RouterProvider>
    </QueryClientProvider>
  );
};
export default App;
