import React, {useCallback} from 'react';
import {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCloudArrowUp} from '@fortawesome/free-solid-svg-icons';
import {storage, auth} from '../../config/firebase';
import {getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage';

import {getAuth, updateProfile} from 'firebase/auth';
const SettingsImage = () => {
  const [file, setFile] = useState({});

  /* const dragOverHandler = (e) => {
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
  }; */
  const auth = getAuth();
  const user = auth.currentUser;
  const updatePicture = useCallback(() => {
    const fileRef = ref(storage, `userAvatar/${user.uid}`);
    uploadBytes(fileRef, file?.obj)
      .then((uploadResult) => {
        getDownloadURL(uploadResult?.ref)
          .then((value) => {
            updateProfile(user, {
              photoURL: value,
            })
              .then(() => {
                setFile((prev) => ({...prev, imageUrl: value}));
                console.log('fent van', user.photoURL);
              })
              .catch((error) => {
                console.log(error);
              });
          })
          .catch((e) => console.log(e));
      })
      .catch((e) => console.log(e));
  }, [user, file.obj]);
  const onFileChange = (e) => {
    setFile({obj: e.target.files[0]});
    console.log(e.target.files[0]);
  };
  return (
    <div className='settings-image-container'>
      <div
        className='settings-image'
        /* onDragOver={dragOverHandler}
        onDragLeave={dragLeaveHandler}
        onDrop={dropHandler} */
      >
        <img src={user.photoURL} alt={user.uid} />
        <input type='file' name='photoUrl' onChange={onFileChange} />
        <button type='button' name='upload' onClick={updatePicture}>
          Upload
        </button>
        <div>
          <FontAwesomeIcon className='settings-icon' icon={faCloudArrowUp} />
        </div>
        {/* <h2>Drag and Drop to Upload File</h2>
        <span>OR</span>
        <button>Browse a file</button> */}
      </div>
    </div>
  );
};

export default SettingsImage;
