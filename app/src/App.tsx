//Packages, Features, etc
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//Css, Images, etc
import './App.css';
//Pages
import LoginPage from './components/Pages/LoginPage/index';
import HomePage from './components/Pages/HomePage/index';



let name: String = "David";


const App: React.FC = () => {
  return (
  
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/test' element={<HomePage/>}/>
    </Routes>
  </BrowserRouter>
    
  );
};

export default App;
