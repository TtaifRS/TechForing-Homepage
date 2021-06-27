import React from 'react';
import './style.css';
const ResourceCard = ({ title, src, text }) => {
  return (
    <div class="main">
      <h1>{title}</h1>
      <ul class="cards">
        <li class="cards_item">
          <div class="card">
            <div class="card_image">
              <img src={src} />
            </div>
            <div class="card_content">
              <p class="card_text">{text}</p>
              <button class="btn card_btn">Read More</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ResourceCard;
