import React from 'react';
import './style.css';
const ResourceCard = ({ title, src, text }) => {
  return (
    <div className="main">
      <h1>{title}</h1>
      <ul className="cards">
        <li className="cards_item">
          <div className="card">
            <div className="card_image">
              <img src={src} alt={title} />
            </div>
            <div className="card_content">
              <p className="card_text">{text}</p>
              <button className="btn card_btn">Read More</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ResourceCard;
