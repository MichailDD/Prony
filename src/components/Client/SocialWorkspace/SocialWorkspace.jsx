import React, { useState } from "react";
import BigTitleClient from "../../UI/BigTitleClient/BigTitleClient";
import ContainerClient from "../ContainerClient/ContainerClient";
import { socWs } from "../../../store";
import "./SocialWorkspace.scss";

const SocialWorkspace = () => {
  const [state, setState] = useState(socWs);

  const onSocClickHandler = (id) => {
    let newState = { ...state };

    for (let el of newState.list) {
      if (id === el.id) {
        el.connected = !el.connected;
      }
    }

    setState({ ...newState });
  };

  return (
    <>
      <BigTitleClient>{state.title}</BigTitleClient>

      <ContainerClient style={{ maxWidth: "444px" }}>
        <ul className="social-ws-list">
          {state.list.map((el) => (
            <li
              onClick={() => {
                onSocClickHandler(el.id);
              }}
              key={el.id}
              className={"social-ws-list__item"}>
              <div className={`social-ws-list__item-btn ${el.connected ? "connected" : ""}`}>
                <img src={el.icon} alt="icon" />
                <span>{el.title}</span>
              </div>
              <p className="social-ws-list__item-text">{el.connected ? "Connect" : "Disconnect"}</p>
            </li>
          ))}
        </ul>
      </ContainerClient>
    </>
  );
};

export default SocialWorkspace;
