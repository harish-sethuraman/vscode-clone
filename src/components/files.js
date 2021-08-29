import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
// import { CloseIcon } from 'Icons/icons';
import renderIcons from './rendericons';

const File = styled.div`
  background: ${(props) => (props.isOpen ? props.theme.selection : props.theme.bg)};
  /* padding-top: 5px; */
  cursor: pointer;
  font-weight: 400;
  width: 175px;
  align-items: center;
  min-width: 150px;
  min-height: 28px;
  ${(props) => (props.isOpen ? `border-top : ${props.theme.border} 1px solid` : null)};
  ${(props) => (!props.isOpen ? 'border-right :1px  black solid' : null)};
  ${(props) => (!props.isOpen ? 'border-bottom :1px black  solid' : null)};
`;

const FileContent = styled.div`
  padding: 8px 5px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;
const GroupText = styled.div`
  padding-left: 5px;
`;
// const GroupIcon = styled.div`
//   transform: scale(0.75);
// `;

const Files = ({ openFile, changeCurrentFile }) => {
  const Theme = useContext(ThemeContext);

  return (
    <>
      {['html', 'css', 'js', 'json'].map((file) => (
        <File
          onClick={() => changeCurrentFile(file)}
          key={file}
          theme={{ ...Theme }}
          isOpen={openFile === file}
        >
          <FileContent isOpen={openFile === file}>
            {renderIcons(file)}
            <GroupText>
              index.
              {file}
            </GroupText>
            {/* <GroupIcon> */}
            {/* {openFile === file ? <CloseIcon /> : null} */}
            {/* </GroupIcon> */}
          </FileContent>
        </File>
      ))}
    </>
  );
};

export default Files;
