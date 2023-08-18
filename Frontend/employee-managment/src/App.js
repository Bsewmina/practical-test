import React from 'react';
import Home from './components/home';
import Header from './components/Header';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddEmployee from './components/AddEmployee';

function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home/>}>
          </Route>
          <Route path="add" element={<AddEmployee/>}>
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
