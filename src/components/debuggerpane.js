/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Button from './button';

const SearchWrapper = styled.div`
  width: ${(props) => `${props.paneWidth}px`};
  height: 100%;
  background-color: ${(props) => props.theme.explorer};
  color: white;
  font-weight: 300;
  font-size: 15px;
`;
const Title = styled.div`
  display: flex;
  font-weight: 400;
  font-size: 12px;
  justify-content: space-between;
  padding: 6px;
`;

const PaneName = styled.span`
  padding-left: 10px;
`;

const Text = styled.p`
padding: 10px 0px;
`;
const Content = styled.div`
padding : 14px;
font-size : 13px;
font-weight : 400;
justify-content:center;
display : flex;
flex-direction : column;
`;

const DebuggerPane = ({ paneWidth }) => {
  const theme = useContext(ThemeContext);
  return (
    <SearchWrapper paneWidth={paneWidth} theme={{ ...theme }}>
      <Title>
        <PaneName>RUN AND DEBUG: RUN</PaneName>
      </Title>
      <Content>
        <Button>Run and Debug</Button>
        <Text>
          To customize Run and Debug create a launch.json file.
        </Text>
        <Text>
          Show all automatic debug configurations
        </Text>

        <Button>JavaScript Debug Terminal</Button>

        <Text>
          You can use the JavaScript Debug Terminal to debug Node.js processes run on the command line.
        </Text>
        <Button>Debug URL</Button>
      </Content>
    </SearchWrapper>
  );
};

export default DebuggerPane;
