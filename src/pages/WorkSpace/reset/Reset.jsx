import React from "react";
import s from "./reset.module.scss";
import { useState } from "react";
import google from "../../../assets/image/WorkSpace/login/google.svg";
import git from "../../../assets/image/WorkSpace/login/git.svg";
import face from "../../../assets/image/WorkSpace/login/face.svg";
import dis from "../../../assets/image/WorkSpace/login/dis.svg";
import twitter from "../../../assets/image/WorkSpace/login/twitter.svg";

const Reset = () => {
  return (
    <div className={`${s.changePassword} container`}>
      <p className={s.changePasswordTitle}>Reset password</p>
      <div className={s.form}>
        <p className={s.formTitle}>
          Forgot your password? Enter your email address below, and we'll email you instructions to
          set a new one.
        </p>
        <div className={s.formInputWr}>
          <p className={s.formInputText}>Your email</p>
          <input className={s.formInput} placeholder="Enter your email" />
        </div>
        <div className={s.formBottom}>
          <button className={s.formBtn} onClick={() => alert("Saved")}>
            Submit
          </button>
          <p className={s.formLink}>Login to your account</p>
        </div>
      </div>
    </div>
  );
};

export default Reset;
