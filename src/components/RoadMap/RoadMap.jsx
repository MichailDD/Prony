import React from "react";
import s from "./roadMap.module.scss";
import like from "../../assets/image/WorkSpace/roadmap/like.svg";

const RoadMap = () => {
  const infoRend = () => {
    const res = [];

    for (let i = 0; i < 5; i++) {
      res.push(
        <div className={s.cardInfoWr} key={i}>
          <div className={s.cardLeft}>
            <img src={like} className={s.cardLike} />
            <p className={s.cardLikeNum}>23</p>
          </div>
          <div className={s.cardRight}>
            <p className={s.cardRightText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
            </p>
            <p className={s.cardRightBoardText}>Board title</p>
          </div>
        </div>
      );
    }

    return res;
  };

  return (
    <div className={`${s.roadmap} container`}>
      <p className={s.title}>Roadmap</p>
      <div className={s.cardsWr}>
        <div className={s.cardWr}>
          <div className={`${s.cardStatus}  ${s.planned}`}>Planned</div>
          {infoRend()}
        </div>
        <div className={s.cardWr}>
          <div className={`${s.cardStatus} ${s.progress}`}>In progress</div>
          {infoRend()}
        </div>
        <div className={s.cardWr}>
          <div className={`${s.cardStatus} ${s.soon}`}>Comming soon</div>
          {infoRend()}
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
