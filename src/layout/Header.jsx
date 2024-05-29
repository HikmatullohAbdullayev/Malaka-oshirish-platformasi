
import React, { useState } from "react";
import Nav from "../components/Nav";
import MenuIcon from "../assets/icon/MenuIcon";
import { NavLink, useLocation, useParams } from "react-router-dom";
import NavTeacher from "../components/NavTeacher";




function Header() {
    const location = useLocation();
console.log(location);
    const [menu, setMenu] = useState(true)
    const changeMenu = () =>{
        setMenu(!menu)
    }
    return (
        <header className=" py-[35px] relative z-10 shadow-lg">
            <div className="container  max-w-[1440px] mx-auto px-[20px] flex gap-2 items-center">
            <div className="inline-block">
            <p onClick={changeMenu} className="flex items-center gap-[20px] cursor-pointer font-normal text-[20px] text-[#0085FF]"><span><MenuIcon/></span>Menu</p>
            {location.pathname === "/" ? <Nav menu={menu}/> : <NavTeacher menu={menu}/>}
            
            </div>
            <NavLink to={'/Admin'}>
            <button className="bg-[#0085FF] w-[100px] h-[30px]">Admin</button>
            </NavLink>
            <NavLink to={'/login'}>
            <button className="bg-[#0085FF] w-[100px] h-[30px]">Login</button>
            </NavLink>
            
            </div>

            
        </header>
    );
}

export default Header;