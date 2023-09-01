import React from "react";
import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";
import GalleryPage from "../pages/GalleryPage";

const User = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/gallery" element={<GalleryPage/>} />
        <Route path="/*" element={<Home/>} />
      </Routes>
    </React.Fragment>
  );
};

export default User;
