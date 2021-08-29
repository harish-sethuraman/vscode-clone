import React from 'react';
import CodeEditor from './codeEditor';

const renderFile = (File) => {
  switch (File) {
    case 'html':
      return (
        <CodeEditor language="html" />
      );

    case 'css':
      return (
        <CodeEditor language="css" />
      );

    case 'js':
      return (
        <CodeEditor language="javascript" />
      );
    case 'json':
      return (
        <CodeEditor language="json" />
      );

    case 'jsx':
      return (
        <CodeEditor language="jsx" />
      );

    default:
      return null;
  }
};
export default renderFile;
