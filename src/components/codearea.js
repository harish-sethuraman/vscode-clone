import React, { useContext, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';

import Files from './files';
import renderFile from './renderfile';
import BreadCrumb from './breadcrumb';

const CodeAreaWrapper = styled.div`
  width: ${(props) => `calc(100vw - ${props.paneWidth}px - 50px)`};
  height: 100%;
  background: ${(props) => props.theme.selection};
`;
const FileExplorer = styled.div`
  display: flex;
  width: auto;
  overflow-x: scroll;
  overflow-y: scroll;
  background: ${(props) => props.theme.explorer};
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CodeArea = ({ openFile, toggleCurrentFile, paneWidth }) => {
  const Theme = useContext(ThemeContext);
  return (
    <CodeAreaWrapper paneWidth={paneWidth} theme={{ ...Theme }}>
      <FileExplorer>
        <Files openFile={openFile} changeCurrentFile={toggleCurrentFile} />
      </FileExplorer>
      <BreadCrumb openFile={openFile} />
      {renderFile(openFile)}
    </CodeAreaWrapper>
  );
};

export default CodeArea;
