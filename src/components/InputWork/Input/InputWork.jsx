import React from "react";
import s from "./input.module.scss";

const InputWork = ({ className, text }) => {
  return <input className={`${s.input} ${className}`} placeholder={text} />;
};

export default InputWork;
