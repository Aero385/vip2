import React, {useState} from 'react';
import { service } from '../../constants/mackdata.js';
import { motion } from 'framer-motion';
import './Service.scss';

const Service = () => {
  return (
    <div className='app__service'>
      <h2 className='head-text'>
        Ride in <span>Style and Comfort:<br/></span> Bus Transfers for <span>Every Occasion!</span>
      </h2>

      <motion.div
        transition={{duration: 0.5, delayChildren: 0.5}}
        className='app__service__wrapper'
      >
        {service.map((service, index) => (
          <div className='app__service-item app__flex' key={index}>
            <div className='app__service-img app__flex'>
              <img src={service.img} alt={service.name}/>
              <motion.div
                whileHover={{opacity: [0, 1]}}
                transition={{duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5}}
                className='app__service-hover app__flex'
              >
                <div className='service__description'>
                  {service.description}
                </div>
              </motion.div>
            </div>
            <div className='app__service-content app__flex'>
              <h4 className='bold-text'>{service.name}</h4>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Service