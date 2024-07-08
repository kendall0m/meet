import { Component } from "react";

// Create new Alert component (parent)
class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
    this.bgColor = null;
  }

  getStyle = () => {
    return {
      color: this.color,
      backgroundColor: this.bgColor,
      borderWidth: "2px",
      borderStyle: "solid",
      fontWeight: "bolder",
      borderRadius: "7px",
      borderColor: this.color,
      textAlign: "center",
      fontSize: "12px",
      margin: "10px 0",
      padding: "10px"
    };
  }

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

// Create a subclass called InfoAlert
class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'rgb(0, 0, 255)'; // blue
    this.bgColor = 'rgb(220, 220, 255)'; // light blue
  }
}

// Create a subclass called WarningAlert
class WarningAlert extends Alert {
  constructor(props) {      
    super(props);
    this.color = "rgb(0, 0, 255)";
    this.bgColor = "rgb(220, 220, 255)";
  }
}

// Create a subclass called WarningAlert
class WarningAlert2 extends Alert {
  constructor(props) {
    super(props);
    this.color = "rgb(255, 165, 0)";
    this.bgColor = "rgb(255, 255, 224)";
  }
}

// Create a subclass called ErrorAlert
class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "rgb(255, 0, 0)";
    this.bgColor = "rgb(255, 204, 203)";
  }
}


export { InfoAlert, WarningAlert2, WarningAlert, ErrorAlert };