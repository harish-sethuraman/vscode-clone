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
  padding: 14px;
  font-size: 13px;
  font-weight: 400;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const GitPane = ({ paneWidth }) => {
  const theme = useContext(ThemeContext);
  return (
    <SearchWrapper paneWidth={paneWidth} theme={{ ...theme }}>
      <Title>
        <PaneName>SOURCE CONTROL</PaneName>
      </Title>
      <Content>
        <Text>
          The folder currently open doesn't have a git repository. You can
          initialize a repository which will enable source control features
          powered by git.
        </Text>
        <Button>Initialize Repository</Button>

        <Text>
          To learn more about how to use git and source control in VS Code
          <a
            style={{ paddingLeft: '3px' }}
            href="https://code.visualstudio.com/docs/editor/versioncontrol"
          >
            read their docs
          </a>
          .
        </Text>
        <Text>
          You can also directly publish this folder to a GitHub repository. Once
          published, you'll have access to source control features powered by
          git and GitHub
        </Text>
        <Button>Publish to GitHub</Button>
      </Content>
    </SearchWrapper>
  );
};

export default GitPane;
