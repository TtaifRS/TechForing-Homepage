import React from 'react';

import { boxDatas } from './boxDatas';

import {
  SBoxContainer,
  SBoxContent,
  BoxItemContainer,
  BoxItem,
  BoxPng,
  BoxH1,
  BoxSpan,
  BoxSub,
  BoxTextContainer,
} from './ServiceBoxStyle';

const ServiceBox = () => {
  return (
    <SBoxContainer>
      <SBoxContent>
        {boxDatas.map((data, index) => {
          const { src, numberValue, spanValue, sub } = data;
          return (
            <BoxItemContainer>
              <BoxItem>
                <BoxPng src={src} alt={sub} />
                <BoxTextContainer>
                  <BoxH1>
                    {numberValue}
                    <BoxSpan>{spanValue}</BoxSpan>
                  </BoxH1>
                  <BoxSub>{sub}</BoxSub>
                </BoxTextContainer>
              </BoxItem>
            </BoxItemContainer>
          );
        })}
      </SBoxContent>
    </SBoxContainer>
  );
};

export default ServiceBox;
