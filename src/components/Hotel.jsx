import React, { useState } from "react";
import "./Hotel.css";
import Subscription from "./Subscription";

export default function Hotel(props) {
  const [isMore, setIsMore] = useState(false);
  const [isRequest, setIsRequest] = useState(false);
  const [isSubscription, setIsSubscription] = useState(false);

  const showDetails = (_) => {
    setIsMore(!isMore);
    setIsRequest(!isMore);
  };

  const renderDetails = () => {
    return (
      <div>
        <div className="details">
          {props.data.city} ({props.data.stars})
        </div>
      </div>
    );
  };

  const hideIt = (hide) => {
    setIsSubscription(!hide);
  }

  const renderRequestButton = () => {
    return (
      <>
        <button
          onClick={() => setIsSubscription(true)}
          className="request"
        >{`Request more info about ${props.data.name}`}</button>
      </>
    );
  };

  return (
    <div className="wrapper">
      <div className="name">{props.data.name}</div>
      <button onClick={showDetails}>{isMore ? "Show less" : "Show more"}</button>
      {isMore && renderDetails()}
      {isRequest && renderRequestButton()}
      {isMore && isSubscription && <Subscription hide={hideIt} hideReq={() => setIsRequest(false) } name={props.data.name} />}
    </div>
  );
}
