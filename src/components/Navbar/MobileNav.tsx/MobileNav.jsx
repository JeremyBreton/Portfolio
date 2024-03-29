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
            <a href="#projets" className="menu-item">
              Projets
            </a>
          </li>
          <li>
            <a href="#experience" className="menu-item">
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
          <div className="navbar-logo-container">
            <li className="li-logosvg">
              <a href="https://github.com/JeremyBreton/" target="blank">
                <svg
                  width="2rem"
                  height="2rem"
                  viewBox="0 0 432 416"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#fff"
                    d="M213.5 0q88.5 0 151 62.5T427 213q0 70-41 125.5T281 416q-14 2-14-11v-58q0-27-15-40q44-5 70.5-27t26.5-77q0-34-22-58q11-26-2-57q-18-5-58 22q-26-7-54-7t-53 7q-18-12-32.5-17.5T107 88h-6q-12 31-2 57q-22 24-22 58q0 55 27 77t70 27q-11 10-13 29q-42 18-62-18q-12-20-33-22q-2 0-4.5.5t-5 3.5t8.5 9q14 7 23 31q1 2 2 4.5t6.5 9.5t13 10.5T130 371t30-2v36q0 13-14 11q-64-22-105-77.5T0 213q0-88 62.5-150.5T213.5 0"
                  />
                </svg>
              </a>
            </li>
            <li className="li-logosvg">
              <a
                href="https://www.linkedin.com/in/jeremy-breton-dev/"
                target="blank"
              >
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M3 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm1.102 4.297a1.195 1.195 0 1 0 0-2.39a1.195 1.195 0 0 0 0 2.39m1 7.516V6.234h-2v6.579zM6.43 6.234h2v.881c.295-.462.943-1.084 2.148-1.084c1.438 0 2.219.953 2.219 2.766c0 .087.008.484.008.484v3.531h-2v-3.53c0-.485-.102-1.438-1.18-1.438c-1.079 0-1.17 1.198-1.195 1.982v2.986h-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
export default MobileNav;
