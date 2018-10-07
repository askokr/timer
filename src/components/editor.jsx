import React, { Component } from "react";
import Moment from "moment";
import DateTime from "react-datetime";
import "./stylesheets/react-datetime.css";

Moment.locale("en-gb", {
  week: {
    dow: 1 // Monday is the first day of the week.
  }
});

class Editor extends Component {
  render() {
    const { eventName, eventDate, imageUrl } = this.props;
    return (
      <div className="container editor-container text-center m-4">
        <div
          className="editor-background"
          style={{ height: "350px", overflow: "hidden" }}
        >
          <form className="container-fluid" onSubmit={this.props.onFormSubmit}>
            <div className="form-row">
              <div className="col">
                <div className="input-group mb-3 m-2">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      Event name:
                    </span>
                  </div>
                  <input
                    id={eventName}
                    className="form-control"
                    name={eventName}
                    type="text"
                    value={eventName}
                    maxLength="42"
                    onChange={this.props.onEventName}
                    placeholder={"Enter event name"}
                  />
                </div>
              </div>

              <div className="col">
                <div className="input-group mb-3 m-2">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      Event date:
                    </span>
                  </div>
                  <DateTime
                    value={eventDate}
                    onChange={this.props.onEventDate}
                  />
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="input-group mb-3 m-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    Image URL:
                  </span>
                </div>
                <input
                  type="url"
                  className="form-control"
                  placeholder="https://cutepicture.info"
                  value={imageUrl}
                  name="imageUrl"
                  onChange={this.props.onImageUrl}
                />
              </div>
            </div>
            <button
              onClick={this.props.onFormSubmit}
              className="btn btn-warning m-4"
            >
              Add new event
            </button>
            {/* <button
              onClick={this.props.onClearForm}
              className="btn btn-secondary m-2"
            >
              Clear form
            </button> */}
          </form>

          <div>
            <button
              onClick={this.props.onToggleEditor}
              className="btn btn-danger m-2"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Editor;
