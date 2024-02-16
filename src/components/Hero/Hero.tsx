import memoji5 from '../../../public/images/memoji-5.png';
import logoReact from '../../../public/images/logo-react.png';
import logoRedux from '../../../public/images/logo-redux.png';
import logoJavascript from '../../../public/images/logo-javascript.png';
import logoPostgresql from '../../../public/images/logo-postgres.png';

import './Hero.scss';

function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Building Digital Experiences That Inspire</h2>
        <p>
          Passionte frontend developer | Transforming Ideas into seamless and
          visually stunning web solutions
        </p>
      </div>

      <div className="hero-img">
        <div>
          <img src={memoji5} alt="" />
        </div>
        <div>
          <div className="tech-icon">
            <img src={logoReact} alt="" />
          </div>
          <div className="tech-icon">
            <img src={logoRedux} alt="" />
          </div>
          <div className="tech-icon">
            <img src={logoJavascript} alt="" />
          </div>
          <div className="tech-icon">
            <img src={logoPostgresql} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
