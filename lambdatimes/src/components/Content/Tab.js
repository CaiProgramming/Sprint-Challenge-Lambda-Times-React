import React from "react";

const Tab = props => {
  return (
    <div className={"tab"} onClick={e => props.cb(e)} data-value={props.tab}>
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
