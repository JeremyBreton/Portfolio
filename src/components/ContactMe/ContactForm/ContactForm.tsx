import React from 'react';
import './ContactForm.scss';
import memoji5 from '../../../../public/images/memoji-5.png';

function ContactForm() {
  return (
    <div className="contact-form-content">
      <form>
        <div className="name-container">
          <input type="text" name="firstname" placeholder="Prénom" />
          <input type="text" name="lastname" placeholder="Nom" />
        </div>
        <input type="text" name="email" placeholder="Email" />
        <textarea name="message" placeholder="Message" rows="3" />
        <button>ENVOYER</button>
      </form>
    </div>
  );
}

export default ContactForm;
