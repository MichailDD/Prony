import React, { useState } from "react";
import "./LangBlock.scss";
import RadioForm from "../../../UI/Forms/RadioForm/RadioForm";

const LangBlock = ({ title, list }) => {
  const [langSelect, setLangSelect] = useState("eng1");

  return (
    <div className="add-ws-lang">
      <h2 className="add-ws__item-title">{title}</h2>

      <ul className="add-ws-lang__lang-list">
        {list.map((el) => (
          <li key={el.id} className="add-ws-lang__lang-item">
            <RadioForm
              title={el.title}
              text={el.text}
              name={title}
              value={el.value}
              checked={langSelect}
              setChecked={setLangSelect}
            />
            <img src={el.icon} alt={el.title} className="add-ws-lang__lang-flag" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LangBlock;
