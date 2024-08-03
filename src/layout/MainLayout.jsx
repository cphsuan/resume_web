import { useOutlet } from "react-router-dom";
import Navbar from "../components/NavBar";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";

export const MainLayout = () => {
  const outlet = useOutlet();
  return (
    <div className="wrap sm:px-16 px-6">
      <Navbar />
      <div className="page-container">
        {outlet}
        <ScrollToTop />
      </div>
      <Footer />
    </div>
  );
};
