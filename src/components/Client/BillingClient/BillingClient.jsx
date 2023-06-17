import React, { useState } from "react";
import { billingCl } from "../../../store";
import BigTitleClient from "../../UI/BigTitleClient/BigTitleClient";
import "./BillingClient.scss";
import ItemBillingClient from "./ItemBillingClient/ItemBillingClient";
import clock from "../../../assets/icons/clock.svg";

const BillingClient = (props) => {
  const [state, setState] = useState(billingCl);

  return (
    <>
      <BigTitleClient style={{ margin: "0 0 11px" }}>{state.title}</BigTitleClient>

      <p className="billing__mess">
        <img src={clock} alt="clock" />
        <span>{state.trialMess}</span>
      </p>

      <h2 className="billing__list-title">{state.titlePlan}</h2>
      <ul className="billing__list billing__list_you">
        <ItemBillingClient
          style={{ margin: "0 0 32px" }}
          plan={state.your.plan}
          suggest={state.your.suggest}
          member={state.your.member}
          price={state.your.price}
          date={state.your.date}
        />
      </ul>
      <h2 className="billing__list-title">{state.titleOtherPlan}</h2>
      <ul className="billing__list billing__list_you">
        {state.list.map((el) => (
          <ItemBillingClient
            key={el.id}
            plan={el.plan}
            suggest={el.suggest}
            member={el.member}
            price={el.price}
            titleBtn={el.titleBtn}
            color={el.color}
          />
        ))}
      </ul>
    </>
  );
};

export default BillingClient;
