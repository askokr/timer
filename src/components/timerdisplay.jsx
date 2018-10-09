import React, { Component } from "react";
import timerFunction from "./timerfunction";
import datetimeStringFunction from "./datetimeStringFunction";
import "../App.css";

class TimerDisplay extends Component {
  render() {
    const props = this.props;
    const { event, onDelete, onEdit } = props;
    const { eventName, eventDate, eventId, imageUrl } = event;
    const backgroundImage = {
      backgroundImage: `url(${imageUrl})`
    };
    return (
      <div className="container timer-container text-center m-4 zoom">
        <div style={backgroundImage} className="background-image" />
        <div
          className={
            "text-container" +
            (new Date(this.props.time) > new Date(eventDate)
              ? " passedEvent"
              : "")
          }
        >
          <div className="d-flex flex-row">
            <div className="p-2 w-100">
              <h2>{eventName === "" ? "Unnamed event" : eventName}</h2>
              <h4>
                {Object.prototype.toString.call(eventDate) ===
                  "[object Date]" || eventDate === ""
                  ? "On an undefined date"
                  : datetimeStringFunction(eventDate)}
              </h4>
              <h3>{timerFunction(props)}</h3>
            </div>
            <div className="p-2 flex-shrink-1">
              <div className="text-container-button">
                <button
                  className="btn btn-danger btn-lg"
                  onClick={() => onDelete(eventId)}
                >
                  <span role="img" aria-label="Delete">
                    🗑
                  </span>
                </button>
                <button
                  className="btn btn-success btn-lg"
                  onClick={() => onEdit(eventId)}
                >
                  <span role="img" aria-label="Edit">
                    🔨
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TimerDisplay;
