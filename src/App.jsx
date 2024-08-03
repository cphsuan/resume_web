import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import routes from "./constants/routes";
import { MainLayout } from "./layout/MainLayout";

export default function App() {
  const renderRoutes = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        ...routes,
        {
          path: "*",
          element: <Navigate to="/" />,
        },
      ],
    },
  ]);

  return <RouterProvider router={renderRoutes} />;
}
