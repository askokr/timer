import React, { Component } from "react";
import Moment from "moment";
import DateTime from "react-datetime";
import Octicon from "react-octicon";

Moment.locale("en-gb", {
  week: {
    dow: 1 // Monday is the first day of the week.
  }
});

class Form extends Component {
  render() {
    const {
      eventName,
      eventDate,
      imageUrl,
      onFormSubmit,
      onEventName,
      onEventDate,
      onImageUrl
    } = this.props;
    return (
      <form className="container-fluid" onSubmit={onFormSubmit}>
        <div className="form-row">
          <div className="col">
            <div className="input-group mb-3 m-2">
              <div className="input-group-prepend">
                <span className="input-group-text">Event name:</span>
              </div>
              <input
                id={eventName}
                className="form-control"
                name={eventName}
                type="text"
                value={eventName}
                maxLength="42"
                onChange={onEventName}
                placeholder={"Enter event name"}
              />
            </div>
          </div>

          <div className="col">
            <div className="input-group mb-3 m-2">
              <div className="input-group-prepend">
                <span className="input-group-text">Event date:</span>
              </div>
              <DateTime
                value={eventDate}
                inputProps={{ readOnly: true }}
                onChange={onEventDate}
              />
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="input-group mb-3 m-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Image URL:</span>
            </div>
            <input
              type="url"
              className="form-control"
              placeholder="https://cutepicture.info"
              value={imageUrl}
              name="imageUrl"
              onChange={onImageUrl}
            />
            <div className="input-group-append">
              <button
                className="btn btn-secondary"
                // onClick={() => onDelete(eventId)}
              >
                <Octicon name="unverified" />
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
