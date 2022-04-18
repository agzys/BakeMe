import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Button } from './Button';
import './HomePage.scss';

function HomePage() {
  return (
    <div className='start-component'>
      <h1>Bake Me</h1>
      <p>Make your life sweeter</p>
      <div className='start-btns'>
        <Link to='/getstarted'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;