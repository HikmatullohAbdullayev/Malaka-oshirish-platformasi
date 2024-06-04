import React from 'react';
import Sidebar from './sidebar';
import { Outlet } from 'react-router-dom';

const Admin = () => {
  return (
    <div className="w-[100%] h-screen flex">
      <div className="col-auto">
        <Sidebar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
