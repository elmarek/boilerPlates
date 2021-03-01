/*
Props
*/

// Passing props down:

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
    };
  }
  /* Note: Example is incomplete:  Missing function and render elements */
  render() {
    const greeting = "Welcome to React";
    return (
      <div>
        {/* Props passed to greeting component */}
        <Greeting greeting={greeting} isShow={this.state.isShow} />
        {/* Props passed to greeting component */}
      </div>
    );
  }
}

// Extracting Props Example

function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img
          className="Avatar"
          src={props.author.avatarUrl} // prop
          alt={props.author.name} // prop
        />
        <div className="UserInfo-name">{props.author.name}</div> {/* prop */}
      </div>
      <div className="Comment-text">{props.text}</div> {/* prop */}
      <div className="Comment-date">{formatDate(props.date)}</div> {/* prop */}
    </div>
  );
}
