import Home from "../pages/home";
import About from "../pages/about";
import Portfolio from "../pages/portfolio";

export default [
  {
    path: "/",
    element: <Home />,
    handle: {
      id: "home",
      title: "Home",
      breadcrumbs: [],
    },
  },
  {
    path: "/about",
    element: <About />,
    handle: {
      id: "about",
      title: "About",
      breadcrumbs: [],
    },
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
    handle: {
      id: "portfolio",
      title: "Portfolio",
      breadcrumbs: [],
    },
  },
];
