import memoji5 from '../../../public/images/memoji-5.png';
import logoReact from '../../../public/images/logo-react.png';
import logoRedux from '../../../public/images/logo-redux.png';
import logoJavascript from '../../../public/images/logo-javascript.png';
import logoPostgresql from '../../../public/images/logo-postgres.png';
import logoWordpress from '../../../public/images/logo-wordpress.png';
import logoNodeJs from '../../../public/images/logo-nodejs-2.png';

import './Hero.scss';

function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Jérémy Breton</h2>
        <h3>Développeur Web Fullstack</h3>
        <p>
          Je suis à la recherche d’une <strong>ALTERNANCE</strong> pour réaliser
          une formation de{' '}
          <strong>« Concepteur Développeur d’Applications Web »</strong>
          <p>
            à partir de <strong> septembre 2024</strong>
          </p>
          {/* <p>
            ou d'un premier contrat en <strong>CDD/CDI</strong>
          </p> */}
        </p>
      </div>

      <div className="hero-img">
        <div>
          <img src={memoji5} alt="Jérémy Breton, développeur Fullstack" />
        </div>
        <div className="tech-icon-container">
          <div className="tech-icon">
            <img src={logoReact} alt="React" />
          </div>
          <div className="tech-icon">
            <img src={logoRedux} alt="Redux" />
          </div>
          <div className="tech-icon">
            <img src={logoJavascript} alt="JavaScript" />
          </div>
          <div className="tech-icon">
            <img src={logoPostgresql} alt="PostgreSQL" />
          </div>
          <div className="tech-icon">
            <img src={logoNodeJs} alt="Node.js" id="nodejs" />
          </div>
          <div className="tech-icon">
            <img src={logoWordpress} alt="Wordpress" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
