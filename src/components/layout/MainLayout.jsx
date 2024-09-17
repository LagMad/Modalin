import React from "react";
// import Footer from "../shared/Footer";
import ScrollToTop from "./ScrollToTop";
import Navbar from "./shared/navbar";
// import background from "../../assets/BgTexture.png"

const MainLayout = ({ children }) => {
  return (
    <>
      <ScrollToTop />
      <div
        className="px-8 bg-cust-cream text-black font-Urbanist"
        // style={{ backgroundImage: `url(${background})` }}
      >
        {/* <Navbar/> */}
        {children}
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default MainLayout;
