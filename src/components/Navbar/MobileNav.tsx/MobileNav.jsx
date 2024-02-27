import React from 'react';
import './MobileNav.scss';
import memoji5 from '../../../../public/images/memoji-5.png';

function MobileNav({ isOpen, toggleMenu }) {
  return (
    <div
      className={`mobile-menu ${isOpen ? 'active' : ''}`}
      onClick={toggleMenu}
    >
      <div className="mobile-menu-container">
        <div className="mobile-menu-container-logo">
          {/* <img className="logo" src={memoji5} alt="Jérémy Breton logo" /> */}
          <p className="logo-content">jérémy</p>
          <p className="logo-content">breton.</p>
        </div>
        <ul>
          <li>
            <a href="/" className="menu-item">
              Projets
            </a>
          </li>
          <li>
            <a href="/" className="menu-item">
              Expériences
            </a>
          </li>
          <button
            className="button-contact"
            onClick={() => {
              window.location.href = 'mailto:breton.jeremy@live.fr';
            }}
          >
            Me contacter
          </button>
        </ul>
      </div>
    </div>
  );
}
export default MobileNav;
