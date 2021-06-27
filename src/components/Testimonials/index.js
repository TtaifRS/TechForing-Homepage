import React from 'react';
import './styles.css';
const Testimonials = ({ name, src, text, title }) => {
  return (
    <article>
      <figure>
        <img alt={name} src={src} />
      </figure>

      <div>
        <h3>{name}</h3>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </article>
  );
};

export default Testimonials;
