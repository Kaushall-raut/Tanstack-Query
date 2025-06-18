import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./Components/MainLayout";
import { Home } from "./pages/Home";
import { FetchOld } from "./pages/FetchOld";
import { FetchRq } from "./pages/FetchRq";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FetchSingle } from "./pages/Fetchsingle";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
      {
        path: "reactquery/:id",
        element: <FetchSingle />,
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
      {/* <ReactQueryDevtools /> */}
      {
        //this will activate the dev tool option on the browser which help to understand the working of the tanstack but it does not work with react router
      }
      <RouterProvider router={Routes}></RouterProvider>
    </QueryClientProvider>
  );
};
export default App;
