import { BrowserRouter } from "react-router-dom";
import NavBar from "../Components/nav/NavBar";
import RouteConf from "../Components/RoutesConf";
import ScrollToTop from "../Components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <RouteConf />
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
