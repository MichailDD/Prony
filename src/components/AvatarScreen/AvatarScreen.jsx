import React, { useState } from "react";
import BigTitle from "../UI/BigTitle/BigTitle";
import BigTitleClient from "../UI/BigTitleClient/BigTitleClient";
import Button from "../UI/Buttons/Button";
import ButtonWrapperForm from "../UI/Buttons/ButtonWrapperForm/ButtonWrapperForm";
import ClearBtn from "../UI/Buttons/ClearBtn/ClearBtn";
import UploadBlock from "../UI/UploadBlock/UploadBlock";
import FormWrapper from "../FormWrapper/FormWrapper";
import s from "./AvatarScreen.scss";

const AvatarScreen = ({ state, client }) => {
  return (
    <div className={s.avatar} style={client ? {} : {}}>
      {client ? <BigTitleClient>{state.title}</BigTitleClient> : <BigTitle>{state.title}</BigTitle>}

      <FormWrapper style={client ? { margin: 0, maxWidth: "537px" } : {}}>
        <p className={s.avatar__subtitle}>{state.subtitle}</p>
        <div className={s.avatar__body}>
          <img src={state.photo} alt={state.title} className={s.avatar__image} />
          <UploadBlock />
        </div>
        <ButtonWrapperForm
          style={
            client
              ? {
                  marginTop: "29px",
                  justifyContent: "flex-end",
                  gap: "28px",
                }
              : {
                  marginTop: "29px",
                  justifyContent: "center",
                  gap: "28px",
                }
          }>
          <ClearBtn
            style={{
              width: "max-content",
              color: "#1565C0",
            }}
            title="Cancel"
          />
          <Button
            style={{
              width: "100%",
              maxWidth: "182px",
              textAlign: "center",
            }}>
            Submit
          </Button>
        </ButtonWrapperForm>
      </FormWrapper>
    </div>
  );
};

export default AvatarScreen;
