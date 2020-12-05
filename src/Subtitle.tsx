import React, { Component } from "react";

export default class Subtitle extends Component {
  render() {
    return (
      <>
        <h2 className="subtitle-text text-center">{this.props.children}</h2>
        <div className="subtitle-base" />
      </>
    );
  }
}
