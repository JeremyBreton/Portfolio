import './styles/index.scss';
import './main.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Skills/Skills';
import WorkExperience from './components/WorkExperience/WorkExperience';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
    <div className="container">
      <Hero />
      <Skills />
      <WorkExperience />
      <ContactMe />
    </div>
    <Footer />
  </React.StrictMode>
);
