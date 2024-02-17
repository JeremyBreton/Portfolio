import React from 'react';
import './ContactMe.scss';
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import ContactForm from './ContactForm/ContactForm';
import logoGithub from '../../../public/images/github.svg';
import logoMail from '../../../public/images/mail.svg';

function ContactMe() {
  return (
    <section className="contact-container">
      <h5>Contactez-moi</h5>
      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard iconUrl={logoMail} text="breton.jeremy@live.fr" />
          <ContactInfoCard
            iconUrl={logoGithub}
            text="github.com/JeremyBreton"
          />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
