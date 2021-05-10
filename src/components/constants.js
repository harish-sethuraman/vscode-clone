// eslint-disable-next-line import/prefer-default-export
export const htmlCode = `<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta name="theme-color" content="#292929">
    <meta name="title" content="Harish Kumar S S">
    <meta name="description"
        content="Portfolio site of Harish Kumar S S aka strek. Currently working at Freshworks as a frontend developer.">
    <meta name="keywords" content="Frontend developer, strek, harish kumar, freshworks, harish kumar s s">
    <meta name="robots" content="index, follow">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="language" content="English">
    <meta name="revisit-after" content="2 days">
    <meta name="author" content="Harish Kumar S S">
<link href="https://microsoft.github.io/vscode-codicons/dist/codicon.css" rel="stylesheet"> 
</head>

<body class=""><noscript>Please enable JavaScript to see the site</noscript></body>
</html>`;

export const jsCode = `import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Hello from './index.jsx';

const Index = () => (
    <h1> <Hello/> </h1>
);

ReactDOM.render(<Index />, document.getElementsByTagName('body')[0]);
`;

export const cssCode = `*{
    margin : 0;
    padding: 0;
}
`;

export const jsxCode = `import React from 'react';

class Hello extends React {
  render() {
    return (
      <div>simon, helloworld!!!</div>
    );
  }
}

export default Hello;
`;

export const jsonCode = `{
    "name": "HARISH KUMAR",
    "version": "0.1.0",
    "private": true,
    "dependencies": {
      "@reach/router": "^1.3.3",
      "@testing-library/jest-dom": "^4.2.4",
      "@testing-library/react": "^9.3.2",
      "@testing-library/user-event": "^7.1.2",
      "react": "^16.13.1",
      "react-dom": "^16.13.1",
      "react-scripts": "3.4.1"
    },
    "scripts": {
      "start": "react-scripts start",
      "build": "react-scripts build",
      "test": "react-scripts test",
      "eject": "react-scripts eject"
    },
    "eslintConfig": {
      "extends": "react-app"
    },
    "browserslist": {
      "production": [
        ">0.2%",
        "not dead",
        "not op_mini all"
      ],
      "development": [
        "last 1 chrome version",
        "last 1 firefox version",
        "last 1 safari version"
      ]
    }
  }`;
