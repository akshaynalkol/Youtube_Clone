import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Head from './Components/Head';
import Body from './Components/Body';
import MainContainer from './Components/MainContainer';

import { Provider } from 'react-redux';
import store from './utils/store';
import WatchPage from './Components/WatchPage';
import Sidebar from './Components/Sidebar';

import './App.css';

function App() {

  return (
    <>
      <Provider store={store}>
        <Router>
          <Head/>
          <Routes>
            <Route path='/' element={<Body />}>
              <Route index element={<MainContainer />} />
              <Route path='watch' element={<WatchPage />} />
            </Route>
          </Routes>
        </Router>

        <Body />


        {/* 
          Head
          Body
            Sidebar
              MenuItems
            MainContainer
              ButtonList
              VideoContainer
                VideoCard
      */}
      </Provider>
    </>
  );
}

export default App;
