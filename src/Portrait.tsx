import React from "react";
import portraitImage from "./images/me.png";

const Portrait = () => {
  return (
    <img
      className="img-fluid profile-pic"
      src={portraitImage}
      alt="Dean James"
    />
  );
};

export default Portrait;
