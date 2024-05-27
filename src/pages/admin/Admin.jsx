import React from 'react'
import Sidebar from './sidebar'
import { Route, Routes } from "react-router-dom";
import Dars from './Dars';
import Kutubxona from './Kutubxona';

const Admin = () => {
  return (
    
    <div className='w-[100%] h-screen flex'>
      <div className='col-auto'>
        <Sidebar/>
      </div>
      <div >
        <Routes>
          <Route path='/lesson' element={<Dars/>}/>
          <Route path='/Kutubxon' element={<Kutubxona/>}/>
          
        </Routes>
      </div>
    </div>
  )
}

export default Admin
