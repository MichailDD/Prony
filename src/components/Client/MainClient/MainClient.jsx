import React, { useState } from "react";
import BigTitleClient from "../../UI/BigTitleClient/BigTitleClient";
import "./MainClient.scss";
import { mainClient } from "../../../store";
import { CloseRoundIcon, EditIcon, PlayIcon, PlusIcon } from "../../UI/SVGIcons/SVGIcons";
import Button from "../../UI/Buttons/Button";
import plusIcon from "../../../assets/icons/plus.svg";

const MainClient = (props) => {
  const [state, setState] = useState(mainClient);

  return (
    <>
      <BigTitleClient>{state.title}</BigTitleClient>

      <ul className="main-client__list">
        {state.list.map((el) => (
          <li className="main-client__item" key={el.id}>
            <h2 className="main-client__name">{el.name}</h2>
            <p className="main-client__subdomain">{el.subdomain}</p>
            <div className="main-client__button-list">
              <button className="main-client__item-btn">
                <EditIcon />
              </button>
              <button className="main-client__item-btn">
                <CloseRoundIcon />
              </button>
              <button className="main-client__item-btn play">
                <PlayIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>

      <Button
        style={{
          maxWidth: "264px",
          width: "100%",
          margin: "0 auto",
        }}>
        <img src={plusIcon} alt="plus" className="main-client__btn-plus-icon" />
        {state.titleBtn}
      </Button>
    </>
  );
};

export default MainClient;
