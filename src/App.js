import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import GetStarted from './components/GetStarted';
import Recipe from './components/Recipe';
import DairyFree from './components/DairyFree';
import GlutenFree from './components/GlutenFree';
import Cakes from './components/Cakes';
import Searched from './components/Searched';
import RecipeDetails from './components/RecipeDetails';
import SignUp from './components/SignUp';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/getstarted' element={<GetStarted />} />
      <Route path='/recipes' element={<Recipe />} />
      <Route path='/dairyfree' element={<DairyFree />} />
      <Route path='/glutenfree' element={<GlutenFree />} />
      <Route path='/cakes' element={<Cakes />} />
      <Route path='/searched/:search' element={<Searched />} />
      <Route path='/recipedetails/:name' element={<RecipeDetails />} />
      <Route path='/signup' element={<SignUp />} />
      </Routes>
    </Router>
     
    </>
  );
}

export default App;
