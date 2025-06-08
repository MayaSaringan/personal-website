import React from "react";

const RandomFactsSection = ({ facts = [] }) => (
  <section className="section random-facts">
    <div className="section-title">The Random Facts</div>
    <ul className="facts-list">
      {facts.map((fact, idx) => (
        <li key={idx}>{fact}</li>
      ))}
    </ul>
  </section>
);

export default RandomFactsSection;
