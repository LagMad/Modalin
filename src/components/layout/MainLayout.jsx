import React from "react";
// import Navbar from "../shared/Navbar";
// import Footer from "../shared/Footer";
import ScrollToTop from "./ScrollToTop";
// import background from "../../assets/BgTexture.png"

const MainLayout = ({ children }) => {
  return (
    <>
      <ScrollToTop />
      <div
        className="bg-cust-cream text-black font-Urbanist"
        // style={{ backgroundImage: `url(${background})` }}
      >
        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default MainLayout;
