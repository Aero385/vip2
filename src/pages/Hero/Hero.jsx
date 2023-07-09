import React, { useState, useEffect } from 'react';
import { images } from '../../constants';
import './Hero.scss';
import { Navbar } from '../../components';
import MyButton from '../../components/MyButton/MyButton';


const slides = [
  {
    image: images.s2,
    titleFirst: 'Slide ',
    titleSecond: 'one',
    description: 'Slide 1 Description',
  },
  {
    image: images.s3,
    titleFirst: 'Slide ',
    titleSecond: 'two',
    description: 'Slide 2 Description',
  },
  {
    image: images.s4,
    titleFirst: 'Slide',
    titleSecond: 'three',
    description: 'Slide 3 Description',
  },
  {
    image: images.s1,
    titleFirst: 'Slide ',
    titleSecond: 'four',
    description: 'Slide 4 Description',
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const interval = 8000; // Default interval of 5000 milliseconds
  
  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, interval);

    return () => clearInterval(sliderInterval);
  }, [slides.length, interval]);

  return (
    <>
      <div className='hero'>
        <Navbar/>
        <div className="hero__slider">
          {slides.map((slide, index) => (
            <div>
              <img key={index} src={slide.image} alt={`Background ${index + 1}`} className={index === currentIndex ? 'active' : ''} />
              <div className={'slider__content ' + (index === currentIndex ? 'active' : '')}>
                <h1>
                  <span style={{ color: '#D3C19F' }}>{slide.titleFirst} </span> 
                  <span style={{ color: 'white' }}>{slide.titleSecond}</span>
                </h1>
                <p>{slide.description}</p>
                <MyButton text='book now'/>
              </div> 
            </div>
          ))}
        </div>
      </div>
      <div className='hero__info'>
        <div className='info__wrapper'>
          <img src={images.dterm} width='50px'/>
          <div className='info__description'>
            <h1>D terminal</h1>
            <p>testetstes</p>
          </div>
        </div>
        <div className='info__wrapper'>
          <img src={images.air} width='50px'/>
          <div className='info__description'>
            <h1>Airport</h1>
            <p>testetstes</p>
          </div>
        </div>
        <div className='info__wrapper'>
          <img src={images.tln_busStation} width='50px'/>
          <div className='info__description'>
            <h1>Bussijam</h1>
            <p>we could meet you at Tallinn</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
