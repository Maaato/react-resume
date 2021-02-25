import React from "react";

export const SocialMedia = ({ label, social }) => {
  return (
    <section className="social section">
      <h2 className="section-title">{label}</h2>
      <div className="social__container bd-grid">
        {social.map((social) => <Social key={social.name} {...social} />)}
      </div>
    </section>
  );
};

const Social = ({ label, url, className }) => (
  <a href={url} target="_blank" rel="noreferrer" className="social__link">
    <i className={`bx ${className} social__icon`}></i> {label}
  </a>
);
