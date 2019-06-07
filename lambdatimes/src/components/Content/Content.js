import React, { Component } from "react";

import Tabs from "./Tabs";
import Cards from "./Cards";

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from "../../data";

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "all",
      tabs: tabData,
      cards: cardData,
      filter: ""
    };
  }

  filterCards = e => {
    console.log(e);
    let filter = e === "all" ? "" : e;
    this.setState({
      filter: filter
    });
  };

  render() {
    return (
      <div className="content-container">
        <Tabs tabs={this.state.tabs} cb={this.filterCards} />
        <Cards cards={this.state.cards} filter={this.state.filter} />
      </div>
    );
  }
}
