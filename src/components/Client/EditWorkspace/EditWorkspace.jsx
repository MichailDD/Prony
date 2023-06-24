import React, { useState } from "react";
import BigTitleClient from "../../UI/BigTitleClient/BigTitleClient";
import ContainerClient from "../ContainerClient/ContainerClient";
import InputFormContainer from "../../UI/Forms/InputFormContainer/InputFormContainer";
import ButtonWrapperForm from "../../UI/Buttons/ButtonWrapperForm/ButtonWrapperForm";
import ClearBtn from "../../UI/Buttons/ClearBtn/ClearBtn";
import Button from "../../UI/Buttons/Button";
import { editWs } from "../../../store";
import "./EditWorkspace.scss";

const EditWorkspace = ({ children, title }) => {
  const [state, setState] = useState(editWs);
  const [nameValue, setNameValue] = useState("");
  const [domainValue, setDomainValue] = useState("");

  return (
    <>
      <BigTitleClient>{title ? title : state.title}</BigTitleClient>

      <ContainerClient>
        <div className="edit-ws__form">
          <InputFormContainer
            style={{ padding: "0", width: "50%" }}
            title={state.name.title}
            ph={state.name.ph}
            value={nameValue}
            setValue={setNameValue}
            name={state.name.title}
          />
          <InputFormContainer
            style={{ padding: "0", width: "50%" }}
            title={state.domain.title}
            ph={state.domain.ph}
            value={domainValue}
            setValue={setDomainValue}
            name={state.domain.title}
          />
        </div>

        {children}

        <ButtonWrapperForm client={true}>
          <ClearBtn blue={true} title="Cancel" />
          <Button>Submit</Button>
        </ButtonWrapperForm>
      </ContainerClient>
    </>
  );
};

export default EditWorkspace;
