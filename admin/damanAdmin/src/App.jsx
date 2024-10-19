import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import WinGo from './components/WinGo';
import K3 from './components/K3';
import FiveD from './components/FiveD';
import { Outlet } from 'react-router-dom';
import Dashboard from './components/Dashboard';


function App() {
  
  return (
    <>
    
    
      <div className="flex"/>
    <Outlet/> 
     
   </>
  );
}

export default App;
