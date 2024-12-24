import React from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router';
import './App.css';
import Navbar from './components/navbar';
import './tailwind.css';
import Login from './components/pages/Login';
import { User } from './data/user';


function App() {


  return (
    <div className='absolute w-full h-full bg-gradient-to-t from-black to-slate-900'>
      <Navbar />

      <BrowserRouter>
        <Routes>
            <Route path='/' element={<div>Home</div>} />
            <Route path='/store' element={<div>Store</div>} />
            <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
