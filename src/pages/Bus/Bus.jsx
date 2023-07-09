import React, {useEffect, useState} from 'react';
import { images } from '../../constants';
import { motion } from 'framer-motion';
import './Bus.scss';




const Bus = () => {
  return (
    <div className='app__bus'>
      <div className='bus__container'>
      <h3 className='bus__headtext'>Our fleet</h3>
      <motion.div
       
        whileInView={{opacity: [0, 1]}}
        transition={{duration: 0.5}}
       
        className='bus__wrapper'
      >
        <motion.div
          className='wrapper__text'
          
        >
          <div className='text__header'>
            <h1>Mini Bus</h1>
          </div>
          <h3>14 to 28 passengers</h3>
          <ul>
            
            <li>DVD AM/FR stereo, Bluetooth, AUX and two monitors</li>
            <li>Comfort luxury option</li>
            <li>Leather seats and impress interior</li>
            <li>Conditioner and climate control</li>
          </ul>
        </motion.div>
        <motion.div
          className='wrapper__img'
        >
          <img src={images.mini1}/>
        </motion.div>
      </motion.div>
      <motion.div
        whileInView={{opacity: [0, 1]}}
        transition={{duration: 0.5}}      
        className='bus__wrapper'
      >
        <motion.div
          className='wrapper__text'
        >
          <div className='text__header'>
            <h1>Maxi Bus</h1>
          </div>
          <h3>up to 54 passengers</h3>
          <ul>
            
            <li>Reclining seats & panaoramic windows</li>
            <li>Electrical outlets, WIFI</li>
            <li>Luggage space and a restroom</li>
          </ul>
          

        </motion.div>
        <motion.div
          className='wrapper__img'
        >
          <img src={images.maxi1}/>
        </motion.div>
      </motion.div>
      <motion.div
        whileInView={{opacity: [0, 1]}}
        transition={{duration: 0.5}}      
        className='bus__wrapper-test'
      >
        <motion.div
          className='wrapper__text-test'
        >
          <div className='text__header'>
            <h1>TEST</h1>
          </div>
          <h3>up to 54 passengers</h3>
          <ul>
            
            <li>Reclining seats </li>
            <li> panaoramic windows</li>
            <li>Electrical outlets, WIFI</li>
            <li>Luggage space and a restroom</li>
          </ul>
        </motion.div>
        <motion.div className='wrapper__img-test test'>
          <img src={images.test}/>
        </motion.div>
      </motion.div>
      </div>
    </div>
  );
}

export default Bus