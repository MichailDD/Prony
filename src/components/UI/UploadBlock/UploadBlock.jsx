import React, { useState } from "react";
import { CloseRoundIcon } from "../SVGIcons/SVGIcons";
import image from "../../../assets/image/post_image.jpg";
import "./UploadBlock.scss";
import InputFileForm from "../Forms/InputFileForm/InputFileForm";

const UploadBlock = ({ title, style }) => {
  const [drag, setDrag] = useState(false);

  return (
    <div className="upload-block" style={style ? style : {}}>
      <p className="upload-block__title">{title}</p>
      <InputFileForm drag={drag} setDrag={setDrag} className="upload-block__upload" />
      {image ? (
        drag ? (
          <div className="upload-block__uploaded">
            <img src={image} alt="image" />
            <button
              className="upload-block__uploaded-del"
              onClick={() => {
                setDrag(!drag);
              }}>
              <CloseRoundIcon />
            </button>
          </div>
        ) : (
          <></>
        )
      ) : (
        <></>
      )}
    </div>
  );
};

export default UploadBlock;
