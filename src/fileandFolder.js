import { explorer } from './dummyData.js';
import React, { useState, useId } from 'react';
import './style.css';

const FileAndFolder = ({ explorer }) => {
  const [value, setValue] = useState(explorer);
  const [expand, setExpand] = useState(false);
  const [isInputFolder, setIsInputFolder] = useState(false);
  const [isInputFile, setIsInputFile] = useState(false);
  const [folderValue, setFolderValue] = useState('');
  const [fileValue, setFileValue] = useState('');
  const date = new Date().getTime();

  const handleClick = () => {
    setExpand((prev) => !prev);
  };

  const handleClickFolder = (event) => {
    event.stopPropagation();
    setIsInputFolder(true);
  };

  const handleClickFile = (event) => {
    event.stopPropagation();
    setIsInputFile(true);
  };

  const handleChangeFolder = (e) => {
    setFolderValue(e.target.value);
  };

  const handleChangeFile = (e) => {
    setFileValue(e.target.value);
  };

  const handleCreateFolder = () => {
    if (!folderValue) return;

    const newFolder = {
      id: date,
      isFolder: true,
      name: folderValue,
      item: [],
    };

    setValue((prevVal) => ({
      ...prevVal,
      items: [...(prevVal.items || []), newFolder],
    }));
    setIsInputFolder(false);
    setFolderValue('');
  };

  const handleCreateFile = () => {
    if (!fileValue) return;

    const copyFile = {
      id: date,
      isFolder: false,
      name: fileValue,
      item: [],
    };

    setValue((prevValue) => ({
      ...prevValue,
      items: [...(prevValue.items || []), copyFile],
    }));
    setIsInputFile(false);
    setFileValue('');
  };

  if (value.isFolder) {
    return (
      <div>
        <div className="files" onClick={handleClick}>
          {' '}
          📁 {value.name}
          <button onClick={handleClickFolder}>+ Folder</button>
          <button onClick={handleClickFile}>+ File</button>
        </div>
        {isInputFolder && (
          <div>
            <input
              type="text"
              placeholder="folder name"
              onChange={handleChangeFolder}
            />

            <button disabled={!folderValue.length} onClick={handleCreateFolder}>
              Create
            </button>
          </div>
        )}

        {isInputFile && (
          <div>
            <input
              type="text"
              placeholder="file name"
              onChange={handleChangeFile}
            />
            <button disabled={!fileValue.length} onClick={handleCreateFile}>
              Create
            </button>
          </div>
        )}

        {value?.items?.map((item) => {
          return (
            <div
              className={`files margin-left  ${expand ? 'display' : 'none'}`}
            >
              <FileAndFolder explorer={item} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return <span>📄 {explorer?.name}</span>;
  }
};

export default FileAndFolder;
