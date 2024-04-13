import React, { useState } from 'react';
import store from './utils/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Head from './Components/Head';
import Body from './Components/Body';
import WatchPage from './Components/WatchPage';
import MainContainer from './Components/MainContainer';

import './App.css';


function App() {

  return (
    <>
      <Provider store={store}>
        <Router>
          <Head />
          <Routes>
            <Route path='/' element={<Body />}>
              <Route index element={<MainContainer />} />
              <Route path='watch' element={<WatchPage />} />
              {/* <Route path='search/:query' element={<SearchPage />} /> */}
            </Route>
          </Routes>
        </Router>
      </Provider>
      
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
    </>
  );
}

export default App;
