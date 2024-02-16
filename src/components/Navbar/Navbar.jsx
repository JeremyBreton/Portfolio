import './Navbar.scss';
import { useState } from 'react';
import memoji5 from '../../../public/images/memoji-5.png';
import menuburger from '../../../public/images/menu-burger-horizontal-thin.svg';
import MobileNav from './MobileNav.tsx/MobileNav';

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img
            className="logo"
            src={memoji5}
            alt="Jérémy Breton, développeur web fullstack"
          />
          <ul>
            <li>
              <a href="/" className="menu-item">
                Skills
              </a>
            </li>
            <li>
              <a href="/" className="menu-item">
                Projets
              </a>
            </li>
            <button className="button-contact" onClick={() => {}}>
              Me contacter
            </button>
          </ul>

          <button className="menu-button" onClick={toggleMenu}>
            <span>
              {openMenu ? '' : ''}
              <img src={menuburger} />
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
