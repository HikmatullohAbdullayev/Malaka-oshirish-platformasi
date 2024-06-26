import React from 'react';
import { Link } from 'react-router-dom';
import DownloadIcon from '../../../assets/icon/DownloadIcon';
import LoginForm from '../../../components/LoginForm';

const Login = () => {
  return (
    <section className="   bg-blue-500 ">
      <div className="container max-w-[1440px]   px-[20px] h-screen  mx-auto pt-[30px]">
        <Link
          to="/download-login"
          className=" flex items-center gap-[10px] max-w-[280px] ml-auto py-[5px] px-[16px] bg-white font-normal text-[18px] rounded-[50px] "
        >
          <span className="cursor-pointer">
            <DownloadIcon />
          </span>
          Sertifikatni yukalab olish
        </Link>
        <div className=" max-w-[450px] w-full mx-auto text-start rounded-[20px]  pt-[50px] ">
          <div className=" grid gap-[10px] px-[20px] py-[20px] formLogin rounded-[20px]  ">
            <p className="text-[24px] font-normal text-white">Login</p>
            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
