import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './_app.scss';
import HomePage from './components/HomePage';
import GetStarted from './components/GetStarted';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/getstarted' element={<GetStarted />} />
      </Routes>
    </Router>
     
    </>
  );
}

export default App;
