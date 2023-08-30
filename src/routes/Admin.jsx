import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Dashboard from '../pages/admin/Dashboard';
import Login from '../pages/admin/Login';

const Admin = () => {

  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/admin/login');
    }
  }, [navigate, token])
  return (
    <>
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/*' element={<Dashboard />} />
    </Routes>
    </>
  )
}

export default Admin