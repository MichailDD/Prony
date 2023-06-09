import React from "react";
import s from "./footerWork.module.scss";
import logo from "../../assets/image/WorkSpace/footer/logoW.png?as=webp";

const FooterWork = () => {
  return (
    <div className={s.footerWr}>
      <div className={s.footerBody}>
        <div className={s.footerTop}>
          <div className={s.footerLeft}>
            <img src={logo} className={s.logo} />
          </div>
          <div className={s.footerRight}>
            <ul className={s.footerUl}>
              <li className={s.footerLiTitle}>Product</li>
              <li className={s.footerLi}>Features</li>
              <li className={s.footerLi}>Integrations</li>
              <li className={s.footerLi}>Case studies</li>
              <li className={s.footerLi}>Documentation</li>
            </ul>
          </div>
        </div>
        <div className={s.footerBottom}></div>
      </div>
    </div>
  );
};

export default FooterWork;
