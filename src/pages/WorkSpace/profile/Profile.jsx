import React from "react";
import s from "./profile.module.scss";

const Profile = () => {
  return (
    <div className={`${s.changePassword} container`}>
      <p className={s.changePasswordTitle}>Profile</p>
      <div className={s.form}>
        <div className={s.formInputWr}>
          <p className={s.formInputText}>First name</p>
          <input className={s.formInput} placeholder="Enter your first name" />
        </div>
        <div className={s.formInputWr}>
          <p className={s.formInputText}>Last name</p>
          <input className={s.formInput} placeholder="Enter your last name" />
        </div>
        <div className={s.formInputWr}>
          <p className={s.formInputText}>Email</p>
          <input className={s.formInput} placeholder="Enter your email" />
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

export default Profile;
