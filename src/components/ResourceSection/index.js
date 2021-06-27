import React from 'react';

import ResourcesCard from '../ResourcesCard';
import TextH3 from '../TextH3';

import resource1 from '../../assets/infoImages/resource-1.png';
import resource2 from '../../assets/infoImages/resource-2.png';
import resource3 from '../../assets/infoImages/resource-3.png';

import { ResourcesContainer, CardContainer } from './ResourcesStyle';

const ResourcesSection = () => {
  return (
    <ResourcesContainer id="resources">
      <TextH3 text="RESOURCES" />
      <CardContainer>
        <ResourcesCard
          title="Guides"
          src={resource1}
          text="Follow our helpful guides and tutorials to learn how to use thirdeye "
        />
        <ResourcesCard
          title="Tips and Trics"
          src={resource2}
          text="Follow our helpful trips and tricks and know short tricks about website vulnerabilities."
        />
        <ResourcesCard
          title="Blog"
          src={resource3}
          text="Read technical articles about current security issues, vulnerabilities, and exploits."
        />
      </CardContainer>
    </ResourcesContainer>
  );
};

export default ResourcesSection;
