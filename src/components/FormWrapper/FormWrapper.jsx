import React from "react";
import s from "./FormWrapper.scss";

const FormWrapper = ({ children, style }) => {
  return (
    <div className={s.formWrapper} style={style}>
      {children}
    </div>
  );
};

export default FormWrapper;
