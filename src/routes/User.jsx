import React from "react";
import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";
import GalleryPage from "../pages/GalleryPage";
import Navbar from "../componets/Navbar";
import PortfolioPage from "../pages/PortfolioPage";
import Footer from "../componets/Footer";
import AboutPage from "../pages/AboutPage";

const User = () => {

  
  return (
    <>
      <div className="boxed_wrapper">
        <div className="preloader" />

        {/* main header */}
        <Navbar />
        {/* End main header */}
        <Routes>
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/*" element={<Home />} />
        </Routes>

         {/*Start footer area*/}
      <Footer />
      {/*End footer area*/}
      </div>
      <button className="scroll-top scroll-to-target" data-target="html">
        <span className="icon-angle" />
      </button>
    </>
  );
};

export default User;
