import React from 'react';
import { Done, Close } from '@material-ui/icons';

import './pricingStyle.css';

import { Button } from '../ButtonStyle';

import { tableDatas } from './tableDatas';

const PricingTable = ({ src, name, amount, user, benefits }) => {
  return (
    <>
      <div
        className="widthContainer"
        style={{ width: '100vw', margin: '10px' }}
      >
        <div className="containarMain">
          {tableDatas.map((data, index) => {
            const { packageName, user, cost, benefits } = data;
            return (
              <div className="listing-item" key={index}>
                <figure className="image">
                  <img
                    src="https://images.unsplash.com/photo-1534951009808-766178b47a4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    alt="figure"
                  />
                  <figcaption>
                    <div className="caption">
                      <h1>{packageName}</h1>
                      <p className="user">{user}</p>
                      <p className="cost">{cost}</p>
                    </div>
                  </figcaption>
                </figure>
                {benefits.map((data, index) => {
                  const { name, icon } = data;
                  return (
                    <div className="listing" key={index}>
                      {icon ? (
                        <Done className="icon" />
                      ) : (
                        <Close className="iconTwo" />
                      )}
                      <h4>{name}</h4>
                    </div>
                  );
                })}
                <div className="" style={{ width: '50%', margin: '10px auto' }}>
                  <Button primary>Sign Up</Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PricingTable;
