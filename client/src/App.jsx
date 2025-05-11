import { useState } from 'react';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/home';
import FlightResult from './pages/flightResult';
import TravellerDetails from './pages/travellerDetails';

function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/flight-result' element={<FlightResult/>} />
          <Route path='/traveller-details' element={<TravellerDetails/>} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
