import React from "react";
import Tab from "./Tab";
class Tabs extends React.Component {
  tabSelected = e => {
    this.props.cb(e.target.dataset.value);
  };
  makeTabsHandler = () => {
    const tabs = this.props.tabs;
    if (tabs) {
      return tabs.map(tab => {
        return <Tab cb={this.tabSelected} tab={tab} />;
      });
    }
  };
  render() {
    return (
      <div className="tabs">
        <div className="topics">
          <span className="title">TRENDING TOPICS:</span>
          {this.makeTabsHandler()}
        </div>
      </div>
    );
  }
}
// Make sure to use PropTypes to validate your types!
export default Tabs;
