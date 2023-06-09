import React from "react";
import { Outlet, Route } from "react-router-dom";
import FooterWork from "../../components/FooterWork/FooterWork";
import HeaderWork from "../../components/HeaderWork/HeaderWork";

const WorkSpace = () => {
  return (
    <>
      <HeaderWork />
      <Outlet />
      <FooterWork />
    </>
  );
};

export default WorkSpace;
