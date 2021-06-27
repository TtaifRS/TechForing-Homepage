import React from 'react';

import TextH3 from '../TextH3/';

import PricingTable from '../PricingTable';

import { PricingTableContainer } from './PricingStyle';

const PricingSection = () => {
  return (
    <div id="pricing" style={{ overflow: 'hidden' }}>
      <TextH3 text="Pricing" />
      <PricingTableContainer>
        <PricingTable />
      </PricingTableContainer>
    </div>
  );
};

export default PricingSection;
