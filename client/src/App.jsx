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
import BookingListPage from './pages/bookingList';
import UserProfilePage from './pages/profile';
import AboutUs from './pages/aboutUs';
import Feedback from './pages/feedback';


function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/flight-result' element={<FlightResult/>} />
          <Route path='/traveller-details' element={<TravellerDetails/>} />
          <Route path='/about-us' element={<AboutUs/>} />
          <Route path='/feedback' element={<Feedback/>} />
          <Route path='/auth' element={<Auth/>} />
          <Route element={<PrivateRoute />}>
           <Route path='/bookings' element={<BookingListPage/>} />
           <Route path='/profile' element={<UserProfilePage/>} />
          </Route>
        </Routes>
        
      </Layout>
      <ToastContainer></ToastContainer>
    </Router>
  )
}

export default App
