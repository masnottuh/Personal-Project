import React, { Component, Fragment } from "react";
import Header from "../Jobs/Header";
import Home from "../Jobs/Home";

class JobPage extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Home />
      </Fragment>
    );
  }
}

export default JobPage;