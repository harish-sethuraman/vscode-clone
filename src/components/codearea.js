import React, { useContext, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';

import Files from './files';
import renderFile from './renderfile';
import BreadCrumb from './breadcrumb';

const CodeAreaWrapper = styled.div`
  width: calc(100vw - 240px);
  height: 100%;
  background: ${(props) => props.theme.selection};
`;
const FileExplorer = styled.div`
  display: flex;
  width: calc(100vw - 240px);
  overflow-x: scroll;
  overflow-y: scroll;
  background: ${(props) => props.theme.explorer};
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CodeArea = ({openFile,toggleCurrentFile}) => {
  const Theme = useContext(ThemeContext);
  return (
    <CodeAreaWrapper theme={{ ...Theme }}>
      <FileExplorer>
        <Files openFile={openFile} changeCurrentFile={toggleCurrentFile} />
      </FileExplorer>
      <BreadCrumb openFile={openFile} />
      {renderFile(openFile)}
    </CodeAreaWrapper>
  );
};

export default CodeArea;
