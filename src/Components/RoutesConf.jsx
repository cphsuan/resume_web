import { useRoutes } from "react-router-dom";
import { navLinks } from "../Constants/navLinks";

const RoutesConf = () => {
  const routesConfig = navLinks.map((link) => ({
    path: link.path,
    element: <link.component />,
  }));

  const routeConfig = useRoutes(routesConfig);
  return routeConfig;
};

export default RoutesConf;
