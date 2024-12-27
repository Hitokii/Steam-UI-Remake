import React, { useLayoutEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import Navbar from './components/navbar';
import LoginPage from './components/pages/Login';
import StorePage from './components/Store';
import './tailwind.css';
import ProfilePage from './components/pages/Profile';
import { User } from './data/user';
import AdminPage from './components/pages/Admin';


function App() {
  return (
    <div className='absolute w-full h-full text-text-main bg-gradient-to-t from-background-main to-[#212B45]'>
      <Navbar />

      <BrowserRouter>
        <Routes>
            <Route path='/' element={<StorePage/>} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/store' element={<StorePage/> } />
            <Route path='/profile' element={<ProfilePage/> } />
            <Route path='/admin/panel' element={<AdminPage/> } />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
