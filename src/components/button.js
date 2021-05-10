import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

const ButtonWrapper = styled.button`
background-color :${(props) => props.theme.button};
color: white;
padding : 5px 10px;
border: none;
`;

const Button = ({ children }) => {
  const theme = useContext(ThemeContext);
  return (
    <ButtonWrapper theme={{ ...theme }}>
      {children}
    </ButtonWrapper>
  );
};
export default Button;
