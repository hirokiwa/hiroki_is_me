import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './page/home/Home';
import React, { useState } from 'react';
import Contents from './page/contents/Contents';
import Header from './parts/header/Header';
import page from './page.json'
import Repeat from './function/Repeat';

const App = ():JSX.Element => {

  return (
    <div className='App'>
      <Header/>
      <div className='app_inner'>
      <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0"></meta>
      <BrowserRouter>
      {/* <Header/> */}
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/contents`} element={<Contents />} />
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
