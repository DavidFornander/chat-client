//Packages, Features, etc
import React from 'react';
import { Route, Routes } from 'react-router-dom'
//Css, Images, etc
import logo from './logo.svg';
import './App.css';
//Pages
import LoginPage from './components/Pages/LoginPage/index';
import HomePage from './components/Pages/HomePage/index';


let name: String = "David";


function App() {
  return (

    <div className='App'> Text </div>
    
  );
}

export default App;



/*
<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>



    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/messages' element={<HomePage/>}/> 
    </Routes>
 
    
*/