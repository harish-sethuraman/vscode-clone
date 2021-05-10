import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ThemeContext, { themes, GlobalStyle } from 'Components/themecontext';

import VSCode from 'Components/vscode';
import { ThemeProvider } from 'styled-components';

const Index = () => (
  <ThemeProvider theme={themes.dark}>
    <GlobalStyle />
    <VSCode />
  </ThemeProvider>
);

ReactDOM.render(<Index />, document.getElementsByTagName('body')[0]);
