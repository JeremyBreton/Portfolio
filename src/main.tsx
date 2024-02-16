import './styles/index.scss';
import './main.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';

import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Skills/Skills';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
    <div className="container">
      <Hero />
      <Skills />
    </div>
  </React.StrictMode>
);
