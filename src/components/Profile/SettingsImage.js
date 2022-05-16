import React, { useCallback } from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import { storage, auth } from '../../config/firebase';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import { getAuth, updateProfile } from 'firebase/auth';
const SettingsImage = () => {
  const [file, setFile] = useState({});

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
                setFile((prev) => ({ ...prev, imageUrl: value }));
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
    setFile({ obj: e.target.files[0] });
    console.log(e.target.files[0]);
  };
  return (
    <div className='settings-image-container'>
      <div className='settings-image'>
        <img src={user.photoURL} alt={user.uid} />
        <input type='file' name='photoUrl' onChange={onFileChange} />
        <button type='button' name='upload' onClick={updatePicture}>
          Upload
        </button>
        <div>
          <FontAwesomeIcon className='settings-icon' icon={faCloudArrowUp} />
        </div>
      </div>
    </div>
  );
};

export default SettingsImage;
