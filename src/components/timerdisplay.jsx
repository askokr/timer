import React, { Component } from "react";
import timerFunction from "./timerfunction";
import datetimeStringFunction from "./datetimeStringFunction";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import Octicon from "react-octicon";
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
                <Tooltip
                  TransitionComponent={Zoom}
                  placement="left"
                  title="Delete this event"
                >
                  <button
                    className="btn btn-danger btn-lg"
                    onClick={() => onDelete(eventId)}
                  >
                    <Octicon name="trashcan" mega />
                  </button>
                </Tooltip>
                <Tooltip
                  TransitionComponent={Zoom}
                  placement="left"
                  title="Edit this event"
                >
                  <button
                    className="btn btn-success btn-lg"
                    onClick={() => onEdit(eventId)}
                  >
                    <Octicon name="tools" mega />
                  </button>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TimerDisplay;
