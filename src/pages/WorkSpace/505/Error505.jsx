import React from "react";
import s from "./error505.module.scss";
import five from "../../../assets/image/WorkSpace/error/5.png?as=webp";
import zero from "../../../assets/image/WorkSpace/error/0Def.png?as=webp";
import { useNavigate } from "react-router-dom";

const Error505 = () => {
  const navigation = useNavigate();

  return (
    <div className={`${s.error} container`}>
      <div className={s.errorTitle}>unexpected error</div>
      <div className={s.centerNums}>
        <img src={five} />
        <img src={zero} />
        <img src={zero} />
      </div>
      <p className={s.errorText}>An error ocurred and your request couldn’t be completed.</p>
      <button
        className={s.btn}
        onClick={() => {
          navigation("../Main");
        }}>
        To home page
      </button>
    </div>
  );
};

export default Error505;
