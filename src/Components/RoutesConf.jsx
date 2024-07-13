import { useRoutes, Navigate } from "react-router-dom";
import { navLinks } from "../Constants/navLinks";

const RoutesConf = () => {
  const routesConfig = navLinks.map((link) => ({
    path: link.path,
    element: <link.component />,
  }));

  routesConfig.push({ path: "*", element: <Navigate to="/" replace /> });

  return useRoutes(routesConfig);
};

export default RoutesConf;
