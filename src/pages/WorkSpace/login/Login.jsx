import React from "react";
import s from "./login.module.scss";
import { useState } from "react";
import google from "../../../assets/image/WorkSpace/login/google.svg";
import git from "../../../assets/image/WorkSpace/login/git.svg";
import face from "../../../assets/image/WorkSpace/login/face.svg";
import dis from "../../../assets/image/WorkSpace/login/dis.svg";
import twitter from "../../../assets/image/WorkSpace/login/twitter.svg";

const Login = () => {
  const [check, setCheck] = useState(false);

  return (
    <div className={`${s.changePassword} container`}>
      <p className={s.changePasswordTitle}>Login</p>
      <div className={s.form}>
        <div className={s.formInputWr}>
          <p className={s.formInputText}>Your login</p>
          <input className={s.formInput} placeholder="Enter your login" />
        </div>
        <div className={s.formInputWr}>
          <p className={s.formInputText}>Your password</p>
          <input className={s.formInput} placeholder="Enter your password" />
        </div>
        <div className={s.formInputEtc}>
          <div className={s.checkboxWr}>
            <div
              className={`${s.checkbox} ${check ? s.checkboxActive : ""}`}
              onClick={() => {
                setCheck(!check);
              }}></div>
            <p className={s.checkboxText}>Keep me logged in</p>
          </div>
          <p className={s.formInputEtcText}>Forgot password</p>
        </div>
        <div className={s.formBottom}>
          <button className={s.formBtn} onClick={() => alert("Saved")}>
            Submit
          </button>
          <p className={s.regRef}>
            Don’t have an account? <span>Create a new account</span>
          </p>
        </div>
        <div className={s.loginServices}>
          <p className={s.loginTitle}>Or login with social:</p>
          <div className={s.loginItems}>
            <div className={s.loginItem}>
              <a href="google.com">
                <img src={google} />
                <p className={s.loginViaText}>Login with Google</p>
              </a>
            </div>
            <div className={s.loginItem}>
              <a href="google.com">
                <img src={git} />
                <p className={s.loginViaText}>Login with Github</p>
              </a>
            </div>
            <div className={s.loginItem}>
              <a href="google.com">
                <img src={face} />
                <p className={s.loginViaText}>Login with Facebook</p>
              </a>
            </div>
            <div className={s.loginItem}>
              <a href="google.com">
                <img src={dis} />
                <p className={s.loginViaText}>Login with Discord</p>
              </a>
            </div>
            <div className={s.loginItem}>
              <a href="google.com">
                <img src={twitter} />
                <p className={s.loginViaText}>Login with Twitter</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
