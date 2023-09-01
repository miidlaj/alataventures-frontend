import React from "react";
import "./Dashboard.css";
import { Route, Routes } from "react-router-dom";
import Portfolio from "./Portfolio";
import Gallery from "./Gallery";
import AdminNav from "./AdminNav";
import Partners from "./Partners";

const Dashboard = () => {

  

  return (
    <>
     <div className="bg-gray-900 min-h-screen flex items-center justify-center">
        <div className="bg-gray-800 flex-1 flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10  sm:p-6 sm:my-2 sm:mx-4 sm:rounded-2xl">
          {/* Navigation */}
          <AdminNav/>
          {/* Content */}
          <Routes>
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/partners" element={<Partners/>} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
