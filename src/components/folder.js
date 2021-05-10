import React, { useContext, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { FolderIcon, ArrowIcon, FolderOpenIcon } from 'Icons/icons';
import renderIcons from './rendericons';

const FolderWrapper = styled.div`
  width: 100%;
`;

const FolderNameWrapper = styled.div`
  display: flex;
  height: 20px;
  cursor : pointer;
  font-weight: 400;
  padding: 5px;
`;

const FilesWrapper = styled.div`
`;

const File = styled.div`
  display: flex;
  padding-left: 25px;
  height : 20px;
  padding-top: 5px;
  padding-bottom :3px;
  font-weight: 400;
  background: ${(props) => (props.isOpen ? props.theme.selection : null)};
  ${(props) => (props.isOpen ? `border:  1px ${props.theme.title}  solid;` : null)}
`;

const GroupText = styled.div`
  padding-left: 5px;
`;
const Folder = ({ openFile, toggleCurrentFile }) => {
  const [showcontents, toggleContents] = useState(false);
  const theme = useContext(ThemeContext);
  return (
    <FolderWrapper>
      <FolderNameWrapper onClick={() => toggleContents(!showcontents)}>
        <ArrowIcon isOpen={showcontents} />
        { showcontents ? <FolderOpenIcon /> : <FolderIcon />}
        <GroupText> contents</GroupText>
      </FolderNameWrapper>
      <FilesWrapper>
        {showcontents && (
          <>
            {['html', 'js', 'css', 'jsx', 'json'].map((file) => (
              <File
                key={file}
                theme={{ ...theme }}
                isOpen={openFile === file}
                onClick={() => toggleCurrentFile(file)}
              >
                {renderIcons(file)}
                <GroupText>
                  index.
                  {file}
                </GroupText>
              </File>
            ))}
          </>
        )}
      </FilesWrapper>
    </FolderWrapper>
  );
};

export default Folder;
