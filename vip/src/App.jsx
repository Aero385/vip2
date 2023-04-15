import React from 'react';
import './App.scss';
import { Navbar, Footer } from './components';
import {Hero, Main, Bus, Service, Contact} from './pages/';

function App() {


  return (
    <div className="App">
      <Navbar/>
      <Hero id='hero'/>
      <Main id='main'/>
      <Bus id='bus'/>
      <Service id='service'/>
      <Contact id='contact'/>
      <Footer/>
    </div>
  )
}

export default App
