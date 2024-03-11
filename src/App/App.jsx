import { BrowserRouter } from "react-router-dom";
import NavBar from "../Components/nav/NavBar";
import RouteConf from "../Components/RoutesConf";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <RouteConf />
    </BrowserRouter>
  );
}

export default App;
