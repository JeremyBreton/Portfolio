import './Navbar.scss';
import memoji5 from '../../../public/images/memoji-5.png';

function Navbar() {
  return (
    <div className="navbar_container">
      <img
        src={memoji5}
        alt="Jérémy Breton, développeur web fullstack"
        className="imgScale"
      />

      <h1>Jérémy Breton</h1>
      <h2>Développeur Web Fullstack </h2>
    </div>
  );
}

export default Navbar;
