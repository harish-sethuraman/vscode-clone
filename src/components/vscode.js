import React, { useContext ,useState} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FilesPane from './filespane';
import LeftNav from './leftnav';
import BottomBar from './bottombar';
import CodeArea from './codearea';
import SearchPane from './searchpane';
import ExtensionPane from './extensionpane'
import GitPane from './gitpane'
import DebuggerPane from './debuggerpane'
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

const VSCode = () => {
  const [File, setFile] = useState('html');

  const Theme = useContext(ThemeContext);
  return (
    <Router>
      <ContentWrapper>
        <Content>
          <LeftNav />
          <Route path="/" exact>
            <FilesPane openFile={File} toggleCurrentFile={setFile}/>
          </Route>
          <Route path="/search" exact>
            <SearchPane />
          </Route>
          <Route path="/git" exact>
            <GitPane />
          </Route>
          <Route path="/debugger" exact>
            <DebuggerPane />
          </Route>
          <Route path="/extension" exact>
            <ExtensionPane />
          </Route>
          <CodeArea openFile={File} toggleCurrentFile={setFile}/>
        </Content>
        <BottomBar />
      </ContentWrapper>
    </Router>
  );
};

export default VSCode;
