import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';

const SettingsImage = () => {
  const [file, setFile] = useState();

  const dragOverHandler = (e) => {
    e.preventDefault();
  };

  const dragLeaveHandler = (e) => {
    e.preventDefault();
  };

  const dropHandler = (e) => {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
    //console.log(file);
    let fileType = file.type;
    //console.log(fileType);
    let validExtension = ['image/jpeg', 'image/jpg', 'image/png'];
    if (validExtension.includes(fileType)) {
      let fileReader = new FileReader();
      fileReader.onload = () => {
        let fileURL = fileReader.result;
        let src = { fileURL }; //user file src in fileURL variable
        console.log(src);
      };
    } else {
      alert('This is not an image file!');
    }
  };

  return (
    <div className='settings-image-container'>
      <div
        className='settings-image'
        onDragOver={dragOverHandler}
        onDragLeave={dragLeaveHandler}
        onDrop={dropHandler}
      >
        <div>
          <FontAwesomeIcon className='settings-icon' icon={faCloudArrowUp} />
        </div>
        <h2>Drag and Drop to Upload File</h2>
        <span>OR</span>
        <button>Browse a file</button>
      </div>
    </div>
  );
};

export default SettingsImage;
