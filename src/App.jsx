import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./layout/Layout";
import LessonTable from "./Pages/LessonTable";
import SciencesList from "./Pages/SciencesList";
import Tasks from "./Pages/Tasks";
import Account from "./Pages/Account";
import LoginMain from "./Pages/LoginMain";
import LoginSerfetikat from "./Pages/LoginSerfetikat";
import Serfetikat from "./Pages/Serfetikat";
import './App.css'

function App() {
  return (
   <>
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="dars-jadvali" element={<LessonTable/>} />
      <Route path="fanlar" element={<SciencesList/>} />
      <Route path="vazifalar" element={<Tasks/>} />
      <Route path="account" element={<Account/>} />
      {/* <Route path="*" element={<NotFound/>}/> */}
     </Route>
      <Route path="login" element={<LoginMain/>}/> 
      <Route path="login-serfetikat" element={<LoginSerfetikat/>}/> 
      <Route path="serfetikat" element={<Serfetikat/>}/> 
  </Routes>
  </>
  );
}

export default App;