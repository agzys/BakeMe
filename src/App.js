import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './_app.scss';
import GetStarted from './components/GetStarted';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <GetStarted />
    </Router>
     
    </>
  );
}

export default App;
