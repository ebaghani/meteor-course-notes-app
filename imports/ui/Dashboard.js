import React from "react";
import PrivateHeader from "./PrivateHeader";


// import {browserHistory} from "react-router";

export default () => {
  return (
    <div>
       <PrivateHeader title="Dashboard" />
       <div className="page-content">
        dashboard page content.
       </div>
    </div>
  );
}
