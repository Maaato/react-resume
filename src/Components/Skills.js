import React from "react";

export const Skills = ({
  technicalLabel,
  softLabel,
  technicalSkills,
  softSkills,
}) => {
  return (
    <>
      <section className="technical-skills section" id="skills">
        <h2 className="section-title">{technicalLabel}</h2>
        <div className="skills__content bd-grid">
          <ul className="skills__data">
            {technicalSkills.map((skill) => <Skill key={skill} skill={skill} />)}
          </ul>
        </div>
      </section>
      <section className="soft-skills section">
        <h2 className="section-title">{softLabel}</h2>
        <div className="skills__content bd-grid">
          <ul className="skills__data">
            {softSkills.map((skill) => <Skill key={skill} skill={skill} />)}
          </ul>
        </div>
      </section>
    </>
  );
};

const Skill = ({ skill }) => (
  <li className="skills__name">
    <span className="skills__circle" /> {skill}
  </li>
);
