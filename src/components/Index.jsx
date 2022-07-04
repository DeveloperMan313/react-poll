import React, { Component } from "react";
import { Link } from "react-router-dom";

class Index extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Main page</h1>
        <Link to="/create-poll">Create poll</Link>
        <br />
        <Link to="/about">About</Link>
      </React.Fragment>
    );
  }
}

export default Index;
