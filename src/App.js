import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';
import FileAndFolder from './fileandFolder.js';
import { explorer } from './dummyData.js';

export default function App() {
  return (
    <div>
      React Folder Structure
      <div>
        <FileAndFolder explorer={explorer} />
      </div>
    </div>
  );
}
