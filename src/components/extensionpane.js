import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

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

const SearchInput = styled.input`
  background-color: ${(props) => props.theme.selection};
  border: 1px ${(props) => props.theme.backgrounnd};
  margin: 5px 10px;
  height: 25px;
  &::placeholder{
    padding-left :5px;
    color : ${(props) => props.theme.comment};
    text-overflow : ellipsis;
  }

  &:focus {
    outline: ${(props) => props.theme.border} 1px solid;

  }
`;
const InputWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
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

const ExtensionPane = ({paneWidth}) => {
  const theme = useContext(ThemeContext);
  return (
    <SearchWrapper paneWidth={paneWidth} theme={{ ...theme }}>
      <Title>
        <PaneName>EXTENSION</PaneName>
      </Title>
      <InputWrapper>
        <SearchInput placeholder="Search Extensions in Marketplace" />
      </InputWrapper>
      <Content>
        <Text>
          Sorry you can't install any Apps here
        </Text>
      </Content>
    </SearchWrapper>
  );
};

export default ExtensionPane;
