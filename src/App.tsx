import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import Navbar from './components/navbar';
import LoginPage from './components/pages/Login';
import StorePage from './components/Store';
import './tailwind.css';


function App() {


  return (
    <div className='absolute w-full h-full text-text-main bg-gradient-to-t from-slate-900 to-black'>
      <Navbar />

      <BrowserRouter>
        <Routes>
            <Route path='/' element={<StorePage/>} />
            <Route path='/store' element={<StorePage/> } />
            <Route path='/login' element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
