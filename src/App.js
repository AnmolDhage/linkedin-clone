import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import './App.css';
import Header from './Header';
import Home from './component/Home';


function App() {
  return (

    <div className="app">
      {/* header */}
      <Header />
      <Home />
      {/* App body */}
      {/* sidevbar */}
      {/* feed */}
      {/* widget */}
    </div>
  );
}

export default App;
