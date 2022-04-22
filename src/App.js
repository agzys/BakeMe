import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import GetStarted from './components/GetStarted';
import Recipe from './components/Recipe';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/getstarted' element={<GetStarted />} />
      <Route path='/recipes' element={<Recipe />} />
      </Routes>
    </Router>
     
    </>
  );
}

export default App;
