import React from 'react';
import { createGlobalStyle } from 'styled-components';

export const themes = {
  dark: {
    bottomBar: '#191a21',
    explorer: '#21222c',
    bg: '#282A36',
    foreground: '#F8F8F2',
    selection: '#44475A',
    comment: '#6272A4',
    cyan: '#8BE9FD',
    green: '#50FA7B',
    orange: '#FFB86C',
    pink: '#FF79C6',
    purple: '#BD93F9',
    red: '#FF5555',
    yellow: '#F1FA8C',
    background: '#272823',
    title: '#6495ed',
    text: '#fff',
    button: 'rgb(106, 115, 125)',
  },
  light: {
    background: '#fff',
    title: '#ff6347',
    text: '#000',
  },
};

export const GlobalStyle = createGlobalStyle`
    * {
      font-family : Source Sans Pro,sans-serif;
      margin: 0;
      padding: 0;
    }
    a{
      text-decoration: none;
      color : #6495ed;
    }
    pre {
      margin : 0 !important;
      padding : 0 !important;
      /* overflow: auto; */
      height : calc(100% - 50px - 26px - 10px - 42px);
      background : #44475A !important;
    }
  `;
