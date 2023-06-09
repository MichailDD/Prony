import s from "./NavigationItemAccordeon.module.css"
import React, { useState } from 'react';
import { Link } from "react-router-dom";
const NavigationItemAccordeon = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={s.accordeon}> <img src={props.icon} alt="" /><a className={s.link} onClick={toggleAccordion}>Settings</a> <img className={s.arrow} src={props.arrow} alt="" /></div>
      {isOpen && (
        
        <ul className={s.list}>
            <div className={s.fake}></div>
          <li className={s.list__item}><Link to="/tags">Settings 1</Link></li>
          <li className={s.list__item}>Settings 2</li>
          <li className={s.list__item}>Settings 3</li>
        </ul>
      )}
    </div>
  );
};


export default NavigationItemAccordeon;

