import React from 'react';
import './Contact.scss';
import { Form, Map } from '../../components';

const Contact = () => {
  return (
    <section className='app__contact'>
      <div className='contact__wrapper'>
        <div className='contact__left'>
          <Form/>
        </div>
        <div className='contact__right'>
          <Map/>
        </div>
      </div>
    </section>
  )
}

export default Contact