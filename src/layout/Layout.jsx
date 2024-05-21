import { Outlet } from "react-router-dom";
import Header from "./Header"
import Footer from "./Footer"
import React from "react";


function Layout() {
    return (
        <div className="flex flex-col justify-between  max-h-full  h-screen w-full ">
            <div className="wrapper">
                <Header/>
                <main>
               <Outlet/>
                </main>
            </div>
           <Footer/>
        </div>
    );
}

export default Layout;