import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import AvatarScreen from "../AvatarScreen/AvatarScreen";
import Breadcrumbs from "../UI/Breadcrumbs/Breadcrumbs";
import AddWorkspace from "./AddWorkspace/AddWorkspace";
import ChangePassWorkspace from "./ChangePassWorkspace/ChangePassWorkspace";
import "./Client.scss";
import DeleteWorkspace from "./DeleteWorkspace/DeleteWorkspace";
import EditWorkspace from "./EditWorkspace/EditWorkspace";
import MainClient from "./MainClient/MainClient";
import Navbar from "./Navbar/Navbar";
import ProfileClient from "./ProfileClient/ProfileClient";
import SocialWorkspace from "./SocialWorkspace/SocialWorkspace";
import { formData } from "../../store";
import PaymentClient from "./PaymentClient/PaymentClient";
import HeaderWork from "../HeaderWork/HeaderWork";
import FooterWork from "../FooterWork/FooterWork";

const Client = () => {
  return (
    <>
      <HeaderWork />
      <main className="client">
        <Breadcrumbs />
        <div className="container container_client">
          <div className="client__row">
            <Navbar />
            <main className="client__body">
              <Outlet />
              <Routes></Routes>
            </main>
          </div>
        </div>
      </main>
      <FooterWork />
    </>
  );
};

export default Client;
