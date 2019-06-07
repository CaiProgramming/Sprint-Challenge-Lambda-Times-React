import React from "react";

import PropTypes from "prop-types";
const Tab = props => {
  return (
    <div className={"tab"} onClick={e => props.cb(e)} data-value={props.tab}>
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tab: PropTypes.string.isRequired,
  cb: PropTypes.func.isRequired
};
export default Tab;
