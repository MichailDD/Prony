import React from "react";
import s from "./avatar.module.scss";
import avatar from "../../../assets/image/WorkSpace/avatar/shrek.jpg?as=webp";
import clip from "../../../assets/image/WorkSpace/avatar/clip.svg";

const Avatar = () => {
  return (
    <div className={`${s.changePassword} container`}>
      <p className={s.changePasswordTitle}>Avatar</p>
      <div className={s.form}>
        <p className={s.formInputText}>Current avatar</p>
        <div className={s.formCenter}>
          <div className={s.formLeft}>
            <img src={avatar} className={s.avatarImg} />
          </div>
          <div className={s.formRight}>
            <input type="file" className={s.formFile} />
            <img src={clip} className={s.clip} />
            <p className={s.formRightCent}>Add file</p>
            <p className={s.formRIghtCent2}>or drop files here</p>
          </div>
        </div>
        <div className={s.formBottom}>
          <p className={s.formCancel}>Cancel</p>
          <button className={s.formBtn} onClick={() => alert("Saved")}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
