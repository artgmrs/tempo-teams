import React from "react";
import { useLocation } from "react-router-dom";

const NoMatch = () => {
  let location = useLocation();

  return (
    <div>
      No match for <strong>{location.pathname}</strong>
    </div>
  );
};

export default NoMatch;
