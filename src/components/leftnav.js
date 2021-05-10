import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const NavWrapper = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 5vw;
  min-width: 40px;
  height: calc(100vh - 25px);
  background: ${(props) => (props.theme.selection ? props.theme.selection : null)};
`;
const NavItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 100%;
  ${(props) => (props.isCurrent ? `border-left: ${props.theme.pink} 1px solid;` : null)}
  background: ${(props) => (props.theme.selection ? props.theme.selection : null)};
`;

const renderIcon = (icon, theme, isOpen) => {
  switch (icon) {
    case 'search':
      return (
        <div
          className="codicon codicon-search"
          style={{ fontSize: '28px', color: `${isOpen === 'search' ? 'white' : theme.comment}`, fontWeight: '200' }}
        />
      );
    case 'git':
      return (
        <div
          className="codicon codicon-source-control"
          style={{ fontSize: '28px', color: `${isOpen === 'git' ? 'white' : theme.comment}`, fontWeight: '200' }}
        />
      );
    case 'debugger':
      return (
        <div
          className="codicon codicon-debug-alt"
          style={{ fontSize: '28px', color: `${isOpen === 'debugger' ? 'white' : theme.comment}`, fontWeight: '200' }}
        />
      );
    case 'extension':
      return (
        <div
          className="codicon codicon-extensions"
          style={{ fontSize: '28px', color: `${isOpen === 'extension' ? 'white' : theme.comment}`, fontWeight: '200' }}
        />
      );
    default:
      return (
        <div
          className="codicon codicon-files"
          style={{ fontSize: '28px', color: `${isOpen === '' ? 'white' : theme.comment}`, fontWeight: '200' }}
        />
      );
  }
};
const LeftNav = () => {
  const theme = useContext(ThemeContext);
  const location = useLocation();
  return (
    <NavWrapper theme={theme}>
      {['', 'search', 'git', 'debugger', 'extension'].map((option) => (
        <Link key={option} to={option}>
          <NavItem
            theme={theme}
            isCurrent={location.pathname.slice(1) === option}
          >
            {renderIcon(option, theme, location.pathname.slice(1))}
          </NavItem>
        </Link>
      ))}
    </NavWrapper>
  );
};

export default LeftNav;
