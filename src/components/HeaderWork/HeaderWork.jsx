import React, { useState } from "react";
import s from "./headerWork.module.scss";
import logo from "../../assets/image/WorkSpace/header/logo.png?as=webp";
import avatar from "../../assets/image/WorkSpace/header/avatar.png?as=webp";
import { IconRenderer } from "../../utils/Icon";
import { useNavigate } from "react-router-dom";

const HeaderWork = () => {
  const [buttonState, setButtonState] = useState([false, false, false]);
  const [loged, setLog] = useState(false);
  const [menu, setMenu] = useState(false);
  const navigation = useNavigate();

  return (
    <div className={`${s.headerWr} `}>
      <div className={`${s.header} container`}>
        <img
          className={s.logo}
          src={logo}
          onClick={() => {
            navigation("../Main");
          }}
        />
        <div className={`${s.right} ${loged ? s.active : ""}`}>
          <div
            className={`${s.boardIconWr} ${buttonState[0] ? s.active : ""}`}
            onClick={() => {
              setButtonState([true, false, false]);
              navigation("../Board");
            }}>
            <IconRenderer id="board" className={`${s.board} ${s.boardPar}`} />
            <p className={s.boardText}>Boards</p>
          </div>
          <div
            className={`${s.boardIconWr} ${buttonState[1] ? s.active : ""}`}
            onClick={() => {
              setButtonState([false, true, false]);
              navigation("../changelog");
            }}>
            <IconRenderer id="changelog" className={`${s.board} ${s.changelog}`} />
            <p className={s.boardText}>Changelog</p>
          </div>
          <div
            className={`${s.boardIconWr} ${buttonState[2] ? s.active : ""}`}
            onClick={() => {
              setButtonState([false, false, true]);
              setLog(true);
            }}>
            <IconRenderer id="login" className={`${s.board} ${s.login}`} />
            <p className={s.boardText}>Log in</p>
          </div>
          <div className={`${s.loged} ${loged ? s.active : ""}`}>
            <div
              className={`${s.boardIconWr} ${buttonState[1] ? s.active : ""}`}
              onClick={() => {
                setButtonState([false, true, false]);
              }}>
              <IconRenderer id="changelog" className={`${s.board} ${s.changelog}`} />
              <p className={s.boardText}>Changelog</p>
            </div>
            <div className={s.avatarWr}>
              <img src={avatar} className={s.avatarImg} />
              <p className={s.avatarText}>Lucy Lavender</p>
              <IconRenderer
                id="etc"
                className={`${s.board} ${s.etc}`}
                onClick={() => {
                  setMenu(!menu);
                }}
              />
              <ul className={`${s.avatarMenu} ${menu ? s.active : ""}`}>
                <li
                  className={s.avatarMenuText}
                  onClick={() => {
                    navigation("../ChangePassword");
                  }}>
                  Change password
                </li>
                <li
                  className={s.avatarMenuText}
                  onClick={() => {
                    navigation("../ChangeProfile");
                  }}>
                  Profile
                </li>
                <li
                  className={s.avatarMenuText}
                  onClick={() => {
                    navigation("../ChangeAvatar");
                  }}>
                  Avatar
                </li>
                <li
                  className={s.avatarMenuText}
                  onClick={() => {
                    setLog(false);
                  }}>
                  Logout
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderWork;
