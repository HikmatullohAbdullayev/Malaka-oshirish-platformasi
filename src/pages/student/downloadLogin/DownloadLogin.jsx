import React from "react";
import { Link } from "react-router-dom";

import DownloadLoginForm from "../../../components/DownloadLoginForm";

const DownloadLogin = () => {
  return (
    <section className="bg-blue-500 ">
      {" "}
      <div className="container max-w-[1440px]   px-[20px] h-screen  mx-auto pt-[30px]">
      
        <div className=" max-w-[450px] w-full mx-auto text-start rounded-[20px]  pt-[50px] ">
          <div className=" grid gap-[10px] px-[20px] py-[20px] formLogin rounded-[20px]  ">
            <p className="text-[24px] font-normal text-white">Login</p>
            <DownloadLoginForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadLogin;
