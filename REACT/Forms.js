import React from "react";

// Handling Submit:

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    // Binding Event Functions
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Handle Change:
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  //Handle Submit:
  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    // Prevent Default is Required
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

/*

Handling Multiple Inputs:

When you need to handle multiple controlled input elements, you can add a name attribute to each element and let the handler function choose what to do based on the value of event.target.name.

For example:

*/

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
    };
    // Binding:
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  // Handle Change Function:

  handleInputChange(event) {
    // State will be passed to form variable
    // State key identified through form event.target.name
    // State value will come from checked or value of form element
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          />
        </label>
      </form>
    );
  }
}
