import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

const BottomBarWrapper = styled.div`
  background: ${(props) => props.theme.darkbg};
  height: 25px;
  border-top: white;
  color: #e1e4e8;
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.85rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding : 0px 20px;
  background: rgba( 46, 132, 213, 100%);
`;

const Group = styled.div`
  align-items: center;
  display: flex;
  padding-left: 5px;
`;
const GroupText = styled.div`
  padding-left: 3px;
`;

const LeftFloat = styled.div`
  display: flex;
`;
const RightFloat = styled.div`
  display: flex;
  margin-right: 20px;
`;

const BottomBar = () => {
  const theme = useContext(ThemeContext);
  return (
    <BottomBarWrapper theme={{ ...theme }}>
      <LeftFloat>
        <Group>
          <div
            className="codicon codicon-git-compare"
            style={{ fontSize: '18px', color: 'white' }}
          />

          <GroupText>master</GroupText>
        </Group>
        <Group>
          <div
            className="codicon codicon-error"
            style={{ fontSize: '18px', color: 'white' }}
          />
          <GroupText>0</GroupText>
        </Group>
        <Group>
          <div
            className="codicon codicon-warning"
            style={{ fontSize: '18px', color: 'white' }}
          />
          <GroupText>0</GroupText>
        </Group>
      </LeftFloat>
      <RightFloat>
        <Group>
          <div
            className="codicon codicon-check"
            style={{ fontSize: '18px', color: 'white' }}
          />
          <GroupText>Prettier</GroupText>
        </Group>
        <Group>
          <div
            className="codicon codicon-bell"
            style={{ fontSize: '18px', color: 'white' }}
          />
        </Group>
      </RightFloat>
    </BottomBarWrapper>
  );
};
export default BottomBar;
