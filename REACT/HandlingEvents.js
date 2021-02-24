import React from "react";

// Handling Click Event:

class ClickExample extends React.Component {
  // Binding Click Function:
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  // Click Event:

  handleClick(e) {
    e.preventDefault();
    console.log("The link was clicked.");
  }

  Render() {
    return (
      <div>
        <a href="#" onClick={handleClick}>
          Click me
        </a>
      </div>
    );
  }
}
