import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  Switch, Route, useLocation, withRouter,
} from 'react-router-dom';
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
  height: 100%;
  width: 100%;
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
const VSCode = ({ history }) => {
  const [File, setFile] = useState('html');
  const [width, setWidth] = useState(240);
  const [initWidth, setInitWidth] = useState(148);
  const currentLocation = useLocation();
  const { innerWidth } = window;

  useEffect(() => {
    if (innerWidth < 500 && currentLocation.pathname.slice(1) !== '') {
      setWidth(148);
      setInitWidth(150);
    } else if (innerWidth < 500 && currentLocation.pathname.slice(1) === '') {
      setWidth(0);
      setInitWidth(2);
    } else if (innerWidth > 500 && currentLocation.pathname.slice(1) !== '') {
      setWidth(238);
      setInitWidth(240);
    } else {
      setWidth(0);
      setInitWidth(0);
    }
  }, [history]);

  history.listen((location) => {
    if (innerWidth < 500 && location.pathname.slice(1) !== '') {
      setWidth(148);
      setInitWidth(150);
    } else if (innerWidth < 500 && location.pathname.slice(1) === '') {
      setWidth(0);
      setInitWidth(2);
    } else if (innerWidth > 500 && location.pathname.slice(1) !== '') {
      setWidth(238);
      setInitWidth(240);
    } else {
      setWidth(0);
      setInitWidth(0);
    }
  });
  const onResize = (event, { size }) => {
    setWidth(size.width);
  };

  return (
    <ContentWrapper>
      <Content>
        <LeftNav />
        <Route path="/">{null}</Route>

        <Route path="/files" exact>
          <ResizableBox
            onResize={onResize}
            style={{ background: 'black', display: 'flex' }}
            width={initWidth}
            // height={100}
            handle={<CustomHandle />}
            handleSize={[8, 8]}
          >
            <FilesPane
              paneWidth={width}
              openFile={File}
              toggleCurrentFile={setFile}
            />
          </ResizableBox>
        </Route>
        <Route path="/search" exact>
          <ResizableBox
            onResize={onResize}
            style={{ background: 'black', display: 'flex' }}
            width={initWidth}
            // height={100}
            handle={<CustomHandle />}
            handleSize={[8, 8]}
          >
            <SearchPane paneWidth={width} />
          </ResizableBox>
        </Route>
        <Route path="/git" exact>
          <ResizableBox
            onResize={onResize}
            style={{ background: 'black', display: 'flex' }}
            width={initWidth}
            // height={100}
            handle={<CustomHandle />}
            handleSize={[8, 8]}
          >
            <GitPane paneWidth={width} />
          </ResizableBox>
        </Route>
        <Route path="/debugger" exact>
          <ResizableBox
            onResize={onResize}
            style={{ background: 'black', display: 'flex' }}
            width={initWidth}
            // height={100}
            handle={<CustomHandle />}
            handleSize={[8, 8]}
          >
            <DebuggerPane paneWidth={width} />
          </ResizableBox>
        </Route>
        <Route path="/extension" exact>
          <ResizableBox
            onResize={onResize}
            style={{ background: 'black', display: 'flex' }}
            width={initWidth}
            // height={100}
            handle={<CustomHandle />}
            handleSize={[8, 8]}
          >
            <ExtensionPane paneWidth={width} />
          </ResizableBox>
        </Route>

        <CodeArea
          paneWidth={width}
          openFile={File}
          toggleCurrentFile={setFile}
        />
      </Content>
      <BottomBar />
    </ContentWrapper>
  );
};

export default withRouter(VSCode);
