import React from 'react';
import '../App.css';
import { Button } from './Button';
import './GetStarted.scss';

function GetStarted() {
  return (
    <div className='start-component'>
      <h1>Bake Me</h1>
      <p>Make your life sweeter</p>
      <div className='start-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default GetStarted;