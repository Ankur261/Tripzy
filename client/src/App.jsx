import { useState } from 'react';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/home';

function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
