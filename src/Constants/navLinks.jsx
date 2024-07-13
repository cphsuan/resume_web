import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import Portfolio from "../pages/portfolio";

export const navLinks = [
  {
    id: "home",
    title: "Home",
    path: "/",
    component: Home,
  },
  {
    id: "about",
    title: "About",
    path: "/about",
    component: About,
  },
  {
    id: "portfolio",
    title: "Portfolio",
    path: "/portfolio",
    component: Portfolio,
  },
  {
    id: "contact",
    title: "Contact",
    path: "/contact",
    component: Contact,
  },
];
