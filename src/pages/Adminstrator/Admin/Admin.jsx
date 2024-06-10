import React from 'react';
import Sidebar from '../sidebar';
import { Outlet } from 'react-router-dom';
import nav from '../../../assets/img/nav.png';

const Admin = () => {
  return (
    <div className="w-[100%] h-screen ">
      <div className="w-[full] h-[70px] bg-[#0E7ED0] flex p-1 gap-3 items-center">
        <img src={nav} alt="img" />
        <h1
          className="text-[20px] flex items-center gap-1"
          onClick={() => setOpen(!open)}
        >
          Menyu
        </h1>
      </div>
      <div className="w-[100%] h-screen flex">
        <div className="col-auto">
          <Sidebar />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;
