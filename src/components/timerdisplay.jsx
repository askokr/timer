import React, { Component } from "react";
import timerFunction from "./functions/timerfunction";
import datetimeStringFunction from "./functions/datetimeStringFunction";
import Buttons from "./TimerDisplayElements/buttons";
import "../App.css";

class TimerDisplay extends Component {
  render() {
    const props = this.props;
    const { event, favouriteEvent, onDelete, onEdit, onFavourite } = props;
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
            <div className="p-2">
              <Buttons
                eventId={eventId}
                favouriteEvent={favouriteEvent}
                onDelete={onDelete}
                onEdit={onEdit}
                onFavourite={onFavourite}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TimerDisplay;
