import React from 'react';
import './SkillsInfoCard.scss';

function SkillsInfoCard({ heading, skills, stack, screenshot, link }) {
  return (
    <div className="skills-info-card">
      <h6>{heading}</h6>

      <div className="skill-info-content">
        <a href={link} target="blank">
          <img src={screenshot} alt={heading} />
        </a>
        {/* {skills.map((item, index) => (
          <React.Fragment key={`skill_${index}`}>
            <div className="skill-info">
              <p>{item.skills}</p>
              <p className="percentage">{item.percentage}</p>
            </div>
            <div className="skill-progress-bg">
              <div
                className="skill-progress"
                style={{ width: item.percentage }}
              />
            </div>
          </React.Fragment>
        ))} */}
      </div>
      <div className="skills-info-stack">
        <span className="tag-stack">
          {stack.map((item) => (
            <span className="tag-stack-detail" key={item.name}>
              {item.name}{' '}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}

export default SkillsInfoCard;
