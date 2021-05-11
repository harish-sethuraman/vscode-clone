import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ThemeContext, { themes, GlobalStyle } from 'Components/themecontext';

import VSCode from 'Components/vscode';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

const Index = () => (
  <Router>
    <ThemeProvider theme={themes.dark}>
      <GlobalStyle />
      <VSCode />
    </ThemeProvider>
  </Router>
);

ReactDOM.render(<Index />, document.getElementsByTagName('body')[0]);
