import React from "react";
import s from "./changePassword.module.scss";

const ChangePassword = () => {
  return (
    <div className={`${s.changePassword} container`}>
      <p className={s.changePasswordTitle}>Change password</p>
      <div className={s.form}>
        <div className={s.formInputWr}>
          <p className={s.formInputText}>Current password</p>
          <input type="password" className={s.formInput} placeholder="Enter current password" />
        </div>
        <div className={s.formInputWr}>
          <p className={s.formInputText}>New Password</p>
          <input type="password" className={s.formInput} placeholder="Enter new password" />
        </div>
        <div className={s.formInputWr}>
          <p className={s.formInputText}>Repeat New Password</p>
          <input type="password" className={s.formInput} placeholder="Enter new password" />
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

export default ChangePassword;
