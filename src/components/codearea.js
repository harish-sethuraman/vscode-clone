import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import Files from './files';
import renderFile from './renderfile';
import BreadCrumb from './breadcrumb';

const CodeAreaWrapper = styled.div`
  width: ${(props) => `calc(100% - ${props.paneWidth+3}px - 50px)`};
  height: calc(100% - 25px);
  background: ${(props) => props.theme.selection};
`;
const FileExplorer = styled.div`
  display: flex;
  width: auto;
  overflow: auto;
  background: ${(props) => props.theme.explorer};
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CodeEditorHolder = styled.div`
  height: calc(100% - 50px);
  width: 100%;
`;

const CodeArea = ({ openFile, toggleCurrentFile, paneWidth }) => {
  const Theme = useContext(ThemeContext);
  return (
    <CodeAreaWrapper paneWidth={paneWidth} theme={{ ...Theme }}>
      <FileExplorer>
        <Files openFile={openFile} changeCurrentFile={toggleCurrentFile} />
      </FileExplorer>
      <BreadCrumb openFile={openFile} />
      <CodeEditorHolder>{renderFile(openFile)}</CodeEditorHolder>
    </CodeAreaWrapper>
  );
};

export default CodeArea;
