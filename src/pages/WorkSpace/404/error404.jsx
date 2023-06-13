import React from "react";
import s from "./error404.module.scss";
import four from "../../../assets/image/WorkSpace/error/4.png?as=webp";
import zero from "../../../assets/image/WorkSpace/error/0.png?as=webp";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigation = useNavigate();

  return (
    <div className={`${s.error} container`}>
      <div className={s.errorTitle}>SOMETHING wrong</div>
      <div className={s.centerNums}>
        <img src={four} />
        <img src={zero} />
        <img src={four} />
      </div>
      <p className={s.errorText}>This page is missing or you assembled the link incorrectly</p>
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

export default Error404;
