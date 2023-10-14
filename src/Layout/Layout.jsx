import React from 'react';
import Footer from '../Footer/Footer';
import Credits from '../Credits/Credits';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

export default function Layout() {
  return (
    <div className='my-5 '>

      <Navbar />
      <Outlet /> 
      {/* <Toaster/> */}
      <Credits />
    </div>
  );
}
