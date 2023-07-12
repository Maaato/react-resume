import React from "react";

export const Academic = ({ academic }) => {
  return (
    <section className="academic-experience section" id="education">
      <h2 className="section-title">Education</h2>
      <div className="education__container bd-grid">
        {academic.map((academy) => (
          <Academy key={academy.institution} {...academy} />
        ))}
      </div>
    </section>
  );
};

const Academy = ({ career, date, institution }) => {
  return (
    <div className="education__content">
      <div className="education__time">
        <span className="education__rounder"></span>
        <span className="education__line"></span>
      </div>
      <div className="education__data bd-grid">
        <h3 className="education__title">{career}</h3>
        <span className="education__year">{date}</span>
        <span className="education__studies">{institution}</span>
      </div>
    </div>
  );
};
