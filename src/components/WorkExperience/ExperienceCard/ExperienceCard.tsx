import React from 'react';
import './ExperienceCard.scss';

function ExperienceCard({ details }) {
  return (
    <div className="work-experience-card">
      <h6>{details.title}</h6>
      <div className="work-duration">{details.date}</div>

      <ul>
        {details.responsabilities.map((item, index) => (
          <li key={index}>
            {item.text}
            {item.link && (
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.link}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExperienceCard;
