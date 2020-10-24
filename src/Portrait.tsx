import React from "react";
import portraitImage from "./images/me.png";

export default () => {
  return (
    <img
      className="img-fluid profile-pic"
      src={portraitImage}
      alt="Dean James"
    />
  );
};
