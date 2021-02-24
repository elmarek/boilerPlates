import React, { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { username: undefined };
  }

  render() {
    return <div></div>;
  }
}

ReactDOM.render(<ClassComponent />, document.getElementByID("root"));
