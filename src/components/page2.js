import React from 'react';
import './page2.css';
import img1 from '../assets/Unity.png'
import img2 from '../assets/blender.png'
import img3 from '../assets/arcore.png'
import img7 from '../assets/System2.png'
import img8 from '../assets/BG.png'


const Page2 = () => {
  return (
    <div className='page2-container'>
      <div className='line3'>
        <div className='title3'>
          <div className='text-center'>
            <h1>METHODOLOGY</h1>
            <img src={img7} alt="SYSTEM"/>
          </div>
        </div>
      </div>
      <div className='line4'>
        <div className='title4'>
          <div className='text-center'>
            <h1>Software Used</h1>
          </div>
          <div className='box1'>
            <div className='su-container'>
            <div className='SU'>
              <img src={img1} alt="Ganache"/>
              <h5>Unity</h5>
            </div>
            <div className='SU'>
              <img src={img2} alt="MetaMask"/>
              <h5>Blender</h5>
            </div>
            <div className='SU'>
              <img src={img3} alt="MetaMask"/>
              <h5>ARCore</h5>
            </div>
            </div>
          </div>
        </div>
        <div className='title8'>
          <div className='img'>
            <img src={img8} alt="BG"/>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
