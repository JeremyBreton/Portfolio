import React from 'react';
import './ContactMe.scss';
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import memoji5 from '../../../public/images/memoji-5.png';
import memoji4 from '../../../public/images/memoji-4.png';
import ContactForm from './ContactForm/ContactForm';

function ContactMe() {
  return (
    <section className="contact-container">
      <h5>Contact Me</h5>
      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard iconUrl={memoji5} text="John@timetoprogram.com" />
          <ContactInfoCard iconUrl={memoji4} text="github.com" />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
