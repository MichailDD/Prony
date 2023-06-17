import React, { useState } from "react";
import { billingHistory } from "../../../store";
import NavPages from "../../NavPages/NavPages";
import BigTitleClient from "../../UI/BigTitleClient/BigTitleClient";
import "./BillingHistoryClient.scss";
import ItemBillingHistoryClient from "./ItemBillingHistoryClient/ItemBillingHistoryClient ";

const BillingHistoryClient = (props) => {
  const [state, setState] = useState(billingHistory);

  return (
    <>
      <BigTitleClient>{state.title}</BigTitleClient>

      <div className="billing-history">
        <div className="billing-history__header">
          <p className="billing-history__header-title">{state.titleDate}</p>
          <p className="billing-history__header-title">{state.titleAmount}</p>
        </div>
        <ul className="billing-history__list">
          {state.list.map((el) => (
            <ItemBillingHistoryClient key={el.id} date={el.date} amount={el.amount} />
          ))}
        </ul>
        <NavPages />
      </div>
    </>
  );
};

export default BillingHistoryClient;
