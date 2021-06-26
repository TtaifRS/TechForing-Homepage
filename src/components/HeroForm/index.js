import React from 'react';
import './heroFormStyle.scss';
const HeroForm = () => {
  return (
    <>
      <div className="form-group">
        <span>domain</span>
        <input
          className="form-field"
          type="text"
          placeholder="https://www.example.com/"
        />
      </div>

      <div className="form-group">
        <input
          className="form-field"
          type="email"
          placeholder="your email address"
        />
        <span>email</span>
      </div>
    </>
  );
};

export default HeroForm;
