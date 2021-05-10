import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { gradientDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {
  cssCode, htmlCode, jsCode, jsonCode, jsxCode,
} from './constants';

const renderFile = (File) => {
  switch (File) {
    case 'html':
      return (
        <SyntaxHighlighter
          showLineNumbers
          language="htmlbars"
          style={gradientDark}
        >
          {htmlCode}
        </SyntaxHighlighter>
      );

    case 'css':
      return (
        <SyntaxHighlighter
          showLineNumbers
          language="css"
          style={gradientDark}
        >
          {cssCode}
        </SyntaxHighlighter>
      );

    case 'js':
      return (
        <SyntaxHighlighter
          showLineNumbers
          language="javascript"
          style={gradientDark}
        >
          {jsCode}
        </SyntaxHighlighter>
      );
    case 'json':
      return (
        <SyntaxHighlighter
          showLineNumbers
          language="json"
          style={gradientDark}
        >
          {jsonCode}
        </SyntaxHighlighter>
      );

    case 'jsx':
      return (
        <SyntaxHighlighter
          showLineNumbers
          language="javascript"
          style={gradientDark}
        >
          {jsxCode}
        </SyntaxHighlighter>
      );

    default:
      return null;
  }
};
export default renderFile;
