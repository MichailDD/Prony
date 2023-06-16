import React from "react";
import s from "./footerWork.module.scss";
import logo from "../../assets/image/WorkSpace/footer/logoW.png?as=webp";
import face from "../../assets/image/WorkSpace/footer/face.svg";
import inst from "../../assets/image/WorkSpace/footer/inst.svg";
import twit from "../../assets/image/WorkSpace/footer/twit.svg";
import you from "../../assets/image/WorkSpace/footer/you.svg";

const FooterWork = () => {
  return (
    <div className={s.footerWr}>
      <div className={`${s.footerBody} container`}>
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
            <ul className={s.footerUl}>
              <li className={s.footerLiTitle}>Use cases</li>
              <li className={s.footerLi}>Feature requests</li>
              <li className={s.footerLi}>Share roadmap</li>
              <li className={s.footerLi}>Manage ideas</li>
            </ul>
            <ul className={s.footerUl}>
              <li className={s.footerLiTitle}>Alternatives</li>
              <li className={s.footerLi}>Prony vs Uservoice</li>
              <li className={s.footerLi}>Prony vs Aha ideas</li>
              <li className={s.footerLi}>Prony vs Canny</li>
              <li className={s.footerLi}>Prony vs Trello</li>
              <li className={s.footerLi}>Prony vs Nolt</li>
            </ul>
            <ul className={s.footerUl}>
              <li className={s.footerLiTitle}>Company</li>
              <li className={s.footerLi}>About us</li>
              <li className={s.footerLi}>Why Prony?</li>
              <li className={s.footerLi}>Team</li>
              <li className={s.footerLi}>Culture</li>
              <li className={s.footerLi}>Manifesto</li>
            </ul>
          </div>
        </div>
        <div className={s.footerBottom}>
          <p className={`${s.footerText} ${s.footerText1}`}>© 2020 Prony | All rights reserved</p>
          <p className={`${s.footerText} ${s.footerText2}`}>Privacy policy | Terms of service</p>
          <div className={s.footerLogos}>
            <img className={s.imgs} src={face} />
            <img className={s.imgs} src={inst} />
            <img className={s.imgs} src={twit} />
            <img className={s.imgs} src={you} />
          </div>
        </div>
      </div>
      <div className={s.footerBottomBack}></div>
    </div>
  );
};

export default FooterWork;
