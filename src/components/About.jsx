import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "./navbar";
import "../css/create-poll.css";

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <h1>Hello World!</h1>
          <Link to="/">Main page</Link>
        </main>
      </React.Fragment>
    );
  }
}

export default About;
