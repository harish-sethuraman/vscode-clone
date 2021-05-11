import React, { useContext, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ResizableBox } from 'react-resizable';
import FilesPane from './filespane';
import LeftNav from './leftnav';
import BottomBar from './bottombar';
import CodeArea from './codearea';
import SearchPane from './searchpane';
import ExtensionPane from './extensionpane';
import GitPane from './gitpane';
import DebuggerPane from './debuggerpane';

// import LeftNav from './leftnav'
// import ThemeContext from 'Components/themecontext'
const ContentWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
const CustomHandle = styled.div`
  height: 100%;
  cursor: col-resize;
  width: 2px;
`;
const VSCode = () => {
  const [File, setFile] = useState('html');
  const [width, setWidth] = useState('240');
  const Theme = useContext(ThemeContext);

  const onResize = (event, { size }) => {
    setWidth(size.width);
  };

  return (
    <Router>
      <ContentWrapper>
        <Content>
          <LeftNav />
          <ResizableBox
            onResize={onResize}
            style={{ background: 'black', display: 'flex' }}
            width={240}
            height="100%"
            handle={<CustomHandle />}
            handleSize={[8, 8]}
          >
            <Route path="/" exact>
              <FilesPane
                paneWidth={width}
                openFile={File}
                toggleCurrentFile={setFile}
              />
            </Route>
            <Route path="/search" exact>
              <SearchPane paneWidth={width} />
            </Route>
            <Route path="/git" exact>
              <GitPane paneWidth={width} />
            </Route>
            <Route path="/debugger" exact>
              <DebuggerPane paneWidth={width} />
            </Route>
            <Route path="/extension" exact>
              <ExtensionPane paneWidth={width} />
            </Route>
          </ResizableBox>

          <CodeArea
            paneWidth={width}
            openFile={File}
            toggleCurrentFile={setFile}
          />
        </Content>
        <BottomBar />
      </ContentWrapper>
    </Router>
  );
};

export default VSCode;
