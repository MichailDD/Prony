import React from "react";
import s from "./newPass.module.scss";
import { useState } from "react";
import google from "../../../assets/image/WorkSpace/login/google.svg";
import git from "../../../assets/image/WorkSpace/login/git.svg";
import face from "../../../assets/image/WorkSpace/login/face.svg";
import dis from "../../../assets/image/WorkSpace/login/dis.svg";
import twitter from "../../../assets/image/WorkSpace/login/twitter.svg";

const NewPass = () => {
  return (
    <div className={`${s.changePassword} container`}>
      <p className={s.changePasswordTitle}>New password</p>
      <div className={s.form}>
        <div className={s.formInputWr}>
          <p className={s.formInputText}>New password</p>
          <input className={s.formInput} placeholder="Enter your password" type="password" />
        </div>
        <div className={s.formInputWr}>
          <p className={s.formInputText}>Confirm password</p>
          <input className={s.formInput} placeholder="Enter your password" type="password" />
        </div>
        <div className={s.formBottom}>
          <button className={s.formBtn} onClick={() => alert("Saved")}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPass;
