import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
/* import Footer2 from "./footer2/Footer2"; */

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
