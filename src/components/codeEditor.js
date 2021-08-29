import React, { useEffect } from 'react';
import * as monaco from 'monaco-editor';
import {
  cssCode, htmlCode, jsCode, jsonCode, jsxCode,
} from './constants';

const renderCode = (language) => {
  switch (language) {
    case 'html':
      return htmlCode;
    case 'css':
      return cssCode;
    case 'javascript':
      return jsCode;
    case 'json':
      return jsonCode;
    case 'jsx':
      return jsxCode;
    default:
      return htmlCode;
  }
};
const CodeEditor = ({ language }) => {
  useEffect(() => {
    self.MonacoEnvironment = {
      getWorkerUrl(moduleId, label) {
        if (label === 'json') {
          return './json.worker.bundle.js';
        }
        if (label === 'css' || label === 'scss' || label === 'less') {
          return './css.worker.bundle.js';
        }
        if (label === 'html' || label === 'handlebars' || label === 'razor') {
          return './html.worker.bundle.js';
        }
        if (label === 'typescript' || label === 'javascript') {
          return './ts.worker.bundle.js';
        }
        return './editor.worker.bundle.js';
      },
    };

    const editor = monaco.editor.create(document.getElementById(language), {
      language,
      BuiltinTheme: 'vs-dark',
      autoIndent: true,
      automaticLayout: true,
      minimap: {
        enabled: false,
      },
      fontSize: '14px',

    });

    const originalModel = monaco.editor.createModel([renderCode(language)].join('\n'), language);
    editor.setModel(
      originalModel,
    );

    monaco.editor.defineTheme('darkTheme', {
      base: 'vs-dark',
      inherit: true,
      rules: [{ background: 'EDF9FA' }],
    });
    monaco.editor.setTheme('darkTheme');
    monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
      jsx: 'react',
    });

    return function () {
      editor.dispose();
    };
  }, [language]);

  return (
    <>
      <div className="CodeEditor" id={language}> </div>
    </>
  );
};

export default CodeEditor;
