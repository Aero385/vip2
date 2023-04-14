import React from 'react';
import { images } from '../../constants';
import './Main.scss';
import ReactCountryFlag from "react-country-flag"


const Main = () => {
  return (
    <div className='app__main app__flex'>
        <div className='main__wrapper'>
          <div className='main__info p-text'>
            <div className='info__headtext'>
              <h1>We offer quick and comfort solution</h1>
            </div>
            <i>Looking for premier bus transfer services for your group outing? Look no further than <span>VipBus!</span> Our fleet of buses can comfortably accommodate groups of 1 to 55 people, with luxurious coaches and comfortable minibuses available to suit your needs. Plus, we offer transfers to Estonia, Latvia, Lithuania, Finland, Sweden, and Norway.</i>
            <div className='info__flag-container'>
              <ReactCountryFlag countryCode="EE" svg title="EST" className='info__flag-icon'/>
              <ReactCountryFlag countryCode="fi" svg title="EST" className='info__flag-icon'/>
              <ReactCountryFlag countryCode="se" svg title="EST" className='info__flag-icon'/>
              <ReactCountryFlag countryCode="no" svg title="EST" className='info__flag-icon'/>
              <ReactCountryFlag countryCode="lt" svg title="EST" className='info__flag-icon'/>
              <ReactCountryFlag countryCode="lv" svg title="EST" className='info__flag-icon'/>
            </div>
          </div>
          <div className='main__img'>
            <img className='main__img-img' src={images.bus_info} alt='photo bus' />
          </div>
        </div>
      </div>
  )
}

export default Main