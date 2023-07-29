import React from 'react';
import './banner.css';
import BG1 from '../assets/ARbl.png'

const banner = () => {
  return (
    <div className='banner-container'>
        <header className='banner-header'>
          <div className='word'>
          <h1>AUGMENTED REALITY NAVIGATION FOR UNIVERSITY</h1>
          <p>INT 400 - INTERNSHIP PROJECT REPORT</p>
          </div>
          <div className='image'>
          <img src={BG1} alt="BG"/>
          </div>
        </header>
    </div>
  );
};

export default banner;
