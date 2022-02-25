import React from 'react';
import Home from './components/pages/Home.js';
import './App.css';
import {BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar.js';



function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
        </Routes>      
      </Router>
    </>

  );
}

export default App;
