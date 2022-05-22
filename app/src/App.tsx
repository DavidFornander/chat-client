//Packages, Features, etc
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@mui/material';

//Css, Images, etc
import './App.css';
import { theme } from './components/shared/theme'

//Pages
import LoginPage from './components/pages/LogIn.page';
import HomePage from './components/pages/Home.page';



let name: String = "David";


const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/messages' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
