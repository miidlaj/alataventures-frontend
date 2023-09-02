import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../admin/Login";
import Auth from "../auth/Auth";
import Dashboard from "../admin/Dashboard";

const Admin = () => {
  

 
  return (
    <>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Auth><Dashboard /></Auth>} />
        </Routes>
    </>
  );
};

export default Admin;
