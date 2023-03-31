import React, { useState } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import Dropzone from 'react-dropzone';

function ImageCropper() {
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({
    unit: '%',
    width: 30,
    aspect: 1 / 1
  });

  const handleDrop = acceptedFiles => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => setImage(reader.result);
    reader.readAsDataURL(file);
  }

  const handleCrop = (crop) => {
    setCrop(crop);
  }

  return (
    <div>
      <Dropzone onDrop={handleDrop}>
        {({getRootProps, getInputProps}) => (
          <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            <p>Drag and drop an image, or click to select file</p>
          </div>
        )}
      </Dropzone>
      {image && (
        <ReactCrop src={image} crop={crop} onChange={handleCrop} />
      )}
    </div>
  );
}

export default ImageCropper;

