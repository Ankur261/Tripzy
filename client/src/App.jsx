import { useState } from 'react';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/home';
import FlightResult from './pages/flightResult';
import TravellerDetails from './pages/travellerDetails';
import Auth from './pages/Auth'
import { ToastContainer } from "react-toastify";
import { PrivateRoute } from "./components/PrivateRoute";


function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/flight-result' element={<FlightResult/>} />
          <Route path='/traveller-details' element={<TravellerDetails/>} />
          <Route path='/auth' element={<Auth/>} />
          {/* <Route element={<PrivateRoute />}>
          </Route> */}
        </Routes>
        
      </Layout>
      <ToastContainer></ToastContainer>
    </Router>
  )
}

export default App
