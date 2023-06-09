import React from "react";
import InputWork from "./Input/InputWork";
import s from "./inputSec.module.scss";

const InputSec = () => {
  return (
    <div className={`${s.feedback} container`}>
      <p className={s.title}>Give feedback</p>
      <InputWork className={""} text={"Board title"} />
      <InputWork className={""} text={"Board title"} />
      <InputWork className={""} text={"Board title"} />
    </div>
  );
};

export default InputSec;
