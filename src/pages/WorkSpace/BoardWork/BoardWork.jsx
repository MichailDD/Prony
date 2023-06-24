import React from "react";
import s from "./boardWork.module.scss";
import like from "../../../assets/image/WorkSpace/board/like.svg";
import text from "../../../assets/image/WorkSpace/board/text.svg";
import pages from "../../../assets/image/WorkSpace/changeLog/Group 209.png?as=webp";

const BoardWork = () => {
  const arr = new Array(16).fill(0);

  console.log(arr);
  return (
    <div className={`${s.board} container`}>
      <div className={s.boardL}>
        <input placeholder="Search" className={s.input} />
        <div className={s.filterTexts}>
          <div>
            <p className={s.filterText}>Sort by:</p>
            <select className={s.select}>
              <option>My posts</option>
              <option>My posts</option>
              <option>My posts</option>
            </select>
          </div>
          <div>
            <p className={s.filterText}>Showing:</p>
            <select className={s.select}>
              <option>My posts</option>
              <option>My posts</option> <option>My posts</option>
            </select>
          </div>
          <div>
            <p className={s.filterText}>Showing:</p>
            <select className={s.select}>
              <option>My posts</option>
              <option>My posts</option> <option>My posts</option>
            </select>
          </div>
          <div>
            <p className={s.filterText}>Showing:</p>
            <select className={s.select}>
              <option>My posts</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
        </div>
        <p className={s.filterClear}>Clear filters</p>
      </div>
      <div className={s.boardR}>
        <div className={s.boardTextCards}>
          {arr.map((el) => {
            return (
              <div className={s.boardTextCard} key={Math.random() * 100}>
                <div className={s.cardLeft}>
                  <img src={like} className={s.like} />
                  <p className={s.cardLeftNum}>23</p>
                </div>
                <div className={s.cardCenter}>
                  <p className={s.topText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
                  </p>
                  <div className={s.cardCenterCenter}>
                    <div className={s.cardCenterRound}></div>
                    <p className={s.cardComp}>Complete</p>
                  </div>
                  <p className={s.cardBottom}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam sed dictum
                    nibh. Tempor, sed molestie neque morbi. Sed sed non, in est turpis nulla tortor.
                  </p>
                </div>
                <div className={s.cardRight}>
                  <img src={text} className={s.text} />
                  <p className={s.cardRightNum}>12</p>
                </div>
              </div>
            );
          })}
          <img src={pages} className={s.pages} />
        </div>
      </div>
    </div>
  );
};

export default BoardWork;
