import React, { useEffect, useState } from "react";
import s from "./changelog.module.scss";
import avatar from "../../../assets/image/WorkSpace/changeLog/avatar.png?as=webp";
import pages from "../../../assets/image/WorkSpace/changeLog/Group 209.png?as=webp";

const Changelog = () => {
  const data = [
    { className: s.new, text: "New" },
    { className: s.improved, text: "Improved" },
    { className: s.new, text: "New" },
    { className: s.new, text: "New" },
    { className: s.fixed, text: "Fixed" },
    { className: s.new, text: "New" },
    { className: s.new, text: "New" },
  ];
  const [statusArr, setStatusArr] = useState(data);
  const [test, setTest] = useState("All");

  const checkChoosen = (el) => {
    console.log(el);
    if (el.text === test) {
      return el;
    } else if (test === "All") {
      return el;
    }
  };

  return (
    <div className={`${s.changelog} container`}>
      <div className={s.filterWr}>
        <p className={s.filterSubText}>Status:</p>
        <div className={s.filter}>
          <select
            value={test}
            className={s.minimal}
            id="select1"
            onChange={(e) => {
              setTest(e.target.value);
            }}>
            <option value="All">All entries</option>
            <option value="New">New</option>
            <option value="Improved">Improved</option>
            <option value="Fixed">Fixed</option>
          </select>
        </div>
      </div>
      <div className={s.recordsWr}>
        {statusArr.filter(checkChoosen).map((el) => {
          return (
            <div key={Date.now() + Math.random() * 100} className={s.recordWr}>
              <p className={s.recordTitle}>Test record</p>
              <div className={`${s.status} ${el.className}`}>{el.text}</div>
              <div className={s.recordBody}>
                <div className={s.recordLeft}>
                  <img src={avatar} className={s.recordImg} />
                </div>
                <div className={s.recordRight}>
                  <div className={s.recordRightTop}>
                    <p className={s.recordTopText1}>John Doe</p>
                    <p className={s.recordTopText2}>01-02-2020</p>
                  </div>
                  <div className={s.recordRightBottom}>
                    <p className={s.recordRightBottomText}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor id quisque
                      magna massa ullamcorper. Vitae justo, fusce viverra arcu enim varius suscipit
                      diam tellus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <img src={pages} className={s.pages} />
    </div>
  );
};

export default Changelog;
