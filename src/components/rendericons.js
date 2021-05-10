import React from 'react';

import {
  HTMLIcon, JSIcon, CSSIcon, ReactIcon, JSONIcon,
} from 'Icons/icons';

const renderIcons = (icon) => {
  switch (icon) {
    case 'js':
      return <JSIcon />;
    case 'css':
      return <CSSIcon />;
    case 'jsx':
      return <ReactIcon />;
    case 'json':
      return <JSONIcon />;
    case 'html':
      return <HTMLIcon />;
    default:
      return null;
  }
};

export default renderIcons;
