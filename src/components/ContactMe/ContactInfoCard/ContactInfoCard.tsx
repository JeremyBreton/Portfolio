import React from 'react';
import './ContactInfoCard.scss';
import memoji5 from '../../../../public/images/memoji-5.png';

function ContactInfoCard({ iconUrl, text }) {
  return (
    <div className="contact-details-card">
      <div className="icon">
        <img src={memoji5} text={text} />
      </div>
      <p>{text}</p>
    </div>
  );
}

export default ContactInfoCard;
