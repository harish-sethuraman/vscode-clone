import React from 'react';
import VSCode from 'Components/vscode';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { themes, GlobalStyle } from 'Components/themecontext';

const App = () => (
  <Router>
    <ThemeProvider theme={themes.dark}>
      <GlobalStyle />
      <VSCode />
    </ThemeProvider>
  </Router>
);

export default App;
