import React from 'react';
import { images } from '../../constants';
import { FiPhoneCall } from 'react-icons/Fi';
import { AiOutlineMail } from 'react-icons/Ai';
import { CgFacebook } from 'react-icons/Cg';
import { FaViber } from 'react-icons/Fa';
import { AiOutlineWhatsApp } from 'react-icons/Ai';
import { BiMap } from 'react-icons/Bi';
import './Footer.scss';

const Footer = () => {
  return (
    <>
    <div className='app__footer app__flex'>
      <div className='footer__wrapper'>
        <div className='footer__about'>
          <span>About us</span>
          <p>We provide premium class transferss and our experience more than 20 years</p>
          <a href='/' className='logo__link'>
            <img src={images.logo} alt='VipBuss logo' />
          </a>
        </div>
        
        <div className='footer__contact'>
          <span>contact info</span>
          <ul>
            <li>
              <BiMap className='footer__icon'/>
              Kadaka tee, Tallinn, Estonia
            </li>
            <li>
              <a href='tel: +3725555555' className='footer__link'>
                <FiPhoneCall className='footer__icon phone'/>
                +372 555 55 55
              </a>
            </li>
            <li>
              <a href='mailto:vipbus@gmail.com.com' className='footer__link'>
                <AiOutlineMail  className='footer__icon email'/>
                Vipbus@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div className='footer__social'>
          <a href='#' className='social__fb app__flex'>
            <CgFacebook className='fb__icon'/>
          </a>
          <a href='#' className='social__vb app__flex'>
            <FaViber className='vb__icon'/>
          </a>
          <a href='#' className='social__wa app__flex'>
            <AiOutlineWhatsApp className='wa__icon'/>
          </a>
        </div>
      </div>        
    </div>
    <div className='copyright app__flex'>
      <div className='copyright__wrapper'>
        <p>@1999 Vipbus ALL RIGHTS RESERVED</p>
      </div>
    </div>
    </>
  )
}

export default Footer