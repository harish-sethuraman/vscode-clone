import React from 'react';
import styled from 'styled-components';
import {
  ArrowIcon,
} from 'Icons/icons';

const BreadCrumbWrapper = styled.div`
  height: 16px;
  width: calc(100% - 5px);
  background: ${(props) => props.theme.selection};
  display: flex;
  padding: 5px;
`;

const Path = styled.div`
  display: flex;
  padding: 0px 2px;
  align-items: center;
`;

const PathName = styled.div``;

const BreadCrumb = () => (
  <BreadCrumbWrapper>
    <Path>
      <PathName>contents</PathName>
      <ArrowIcon />
    </Path>
    <Path>
      <PathName>index.js</PathName>
      <ArrowIcon />
    </Path>
  </BreadCrumbWrapper>
);

export default BreadCrumb;
