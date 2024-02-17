import React from 'react';
import './ContactInfoCard.scss';

function ContactInfoCard({ iconUrl, text }) {
  return (
    <div className="contact-details-card">
      <div className="icon">
        <img src={iconUrl} text={text} />
      </div>
      <p>{text}</p>
    </div>
  );
}

export default ContactInfoCard;
