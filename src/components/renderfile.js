import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';

// import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import {
  cssCode, htmlCode, jsCode, jsonCode, jsxCode,
} from './constants';

const renderFile = (File) => {
  switch (File) {
    case 'html':
      return (
        <SyntaxHighlighter
          showLineNumbers
          language="wiki"
          style={dracula}
        >
          {htmlCode}
        </SyntaxHighlighter>
      );

    case 'css':
      return (
        <SyntaxHighlighter
          showLineNumbers
          language="css"
          style={dracula}
        >
          {cssCode}
        </SyntaxHighlighter>
      );

    case 'js':
      return (
        <SyntaxHighlighter
          showLineNumbers
          language="javascript"
          style={dracula}
        >
          {jsCode}
        </SyntaxHighlighter>
      );
    case 'json':
      return (
        <SyntaxHighlighter
          showLineNumbers
          language="json"
          style={dracula}
        >
          {jsonCode}
        </SyntaxHighlighter>
      );

    case 'jsx':
      return (
        <SyntaxHighlighter
          showLineNumbers
          language="jsx"
          style={dracula}
        >
          {jsxCode}
        </SyntaxHighlighter>
      );

    default:
      return null;
  }
};
export default renderFile;
