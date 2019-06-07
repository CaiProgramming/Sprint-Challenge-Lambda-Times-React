import React, { Component } from "react";
import Card from "./Card";

class Cards extends React.Component {
  makeCardHandler = () => {
    console.log(this.props.filter);
    if (this.props.cards) {
      return this.props.cards.map(card => {
        if (card.tab === this.props.filter || this.props.filter === "") {
          return <Card card={card} />;
        }
      });
    }
  };
  render() {
    return <div className="cards-container">{this.makeCardHandler()}</div>;
  }
}
// Make sure you include prop types for all of your incoming props

export default Cards;
