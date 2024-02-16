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
        <img className="logo" src={memoji5} alt="Jérémy Breton logo" />
        <ul>
          <li>
            <a href="#" className="menu-item">
              Skills
            </a>
          </li>
          <li>
            <a href="#" className="menu-item">
              Projets
            </a>
          </li>
          <button className="button-contact" onClick={() => {}}>
            Me contacter
          </button>
        </ul>
      </div>
    </div>
  );
}
export default MobileNav;
