import React from 'react';

import { Footer, Blog, Possibility, Feature, WhatGPT3, Header } from './containers';
import {Cta, Brand, Navbar} from './components';
import './App.css';
const App = () => {
  return (
    <div>
        <div className='App'>
          <div className='gradient__bg'>
            <Navbar />
            <Header />
            
          </div>
          <Brand />
          <WhatGPT3 />
          <Feature />
          <Possibility />
          <Cta />
          <Blog />
          <Footer />

        </div>
    </div>
  )
}

export default App