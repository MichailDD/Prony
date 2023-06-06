import React, { useState } from 'react';
import s from "./InputPhoto.module.css"
function InputPhoto() {
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(URL.createObjectURL(file));
  };

  const handlePhotoRemove = () => {
    setPhoto(null);
  };

  return (
    <div style={{ border: '1px solid black', width: '300px', height: '300px', position: 'relative' }}>
      {photo ? (
        <>
          <img src={photo} alt="Uploaded Photo" style={{ position: 'absolute', bottom: '0', width: '100%', height: 'auto' }} />
          <button onClick={handlePhotoRemove} style={{ position: 'absolute', bottom: '5px', right: '5px' }}>
            Удалить фото
          </button>
        </>
      ) : (
        <label htmlFor="photoUpload" style={{ position: 'absolute', bottom: '0', cursor: 'pointer' }}>
          Нажмите здесь, чтобы выбрать изображение
          <input
            type="file"
            id="photoUpload"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handlePhotoChange}
          />
        </label>
      )}
    </div>
  );
}

export default InputPhoto;
