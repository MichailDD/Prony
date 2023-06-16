import React, { useState } from "react";
import { addWs } from "../../../store";
import "./AddWorkspace.scss";
import EditWorkspace from "../EditWorkspace/EditWorkspace";
import RadioForm from "../../UI/Forms/RadioForm/RadioForm";
import LangBlock from "./LangBlock/LangBlock";
import ThemeBlock from "./ThemeBlock/ThemeBlock";
import PlanBlock from "./PlanBlock/PlanBlock";

const AddWorkspace = ({ children }) => {
  const [state, setState] = useState(addWs);

  return (
    <EditWorkspace title={state.title}>
      <div className="add-ws">
        <LangBlock title={state.lang.title} list={state.lang.list} />
        <ThemeBlock title={state.theme.title} list={state.theme.list} />
        <PlanBlock title={state.plan.title} list={state.plan.list} />
      </div>
    </EditWorkspace>
  );
};

export default AddWorkspace;
