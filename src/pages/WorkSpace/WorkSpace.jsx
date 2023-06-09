import React from "react";
import HeaderWork from "../../components/HeaderWork/HeaderWork";
import "./workSpace.module.scss";
import InputSec from "../../components/InputWork/InputSec";
import RoadMap from "../../components/RoadMap/RoadMap";
import FooterWork from "../../components/FooterWork/FooterWork";

const WorkSpace = () => {
  return (
    <>
      <HeaderWork />
      <InputSec />
      <RoadMap />
      <FooterWork />
    </>
  );
};

export default WorkSpace;
