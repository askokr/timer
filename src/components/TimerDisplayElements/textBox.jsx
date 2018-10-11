import React, { Component } from "react";
import timerFunction from "../functions/timerfunction";
import datetimeStringFunction from "../functions/datetimeStringFunction";

class TextBox extends Component {
  render() {
    const { eventDate, eventName, timerFunctionInput } = this.props;
    return (
      <React.Fragment>
        <h2>{eventName === "" ? "Unnamed event" : eventName}</h2>
        <h4>
          {Object.prototype.toString.call(eventDate) === "[object Date]" ||
          eventDate === ""
            ? "On an undefined date"
            : datetimeStringFunction(eventDate)}
        </h4>
        <h3>{timerFunction(timerFunctionInput)}</h3>
      </React.Fragment>
    );
  }
}

export default TextBox;
