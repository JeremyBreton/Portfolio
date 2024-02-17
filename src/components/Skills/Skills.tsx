import React, { useState } from 'react';
import './Skills.scss';
import { PROJECTS } from '../../utils/data';
import SkillCard from './SkillCard/SkillCard';
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard';

function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(PROJECTS[0]);
  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
  };
  return (
    <section className="skills-container">
      <h5>Projets</h5>
      <div className="skills-content">
        <div className="skills">
          {PROJECTS.map((item) => (
            <SkillCard
              key={item.title}
              iconUrl={item.icon}
              title={item.title}
              isActive={selectedSkill.title === item.title}
              onClick={() => {
                handleSelectSkill(item);
              }}
            />
          ))}
        </div>
        <div className="skills-info">
          <SkillsInfoCard
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
            stack={selectedSkill.stack}
            screenshot={selectedSkill.screenshot}
            link={selectedSkill.link}
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;
