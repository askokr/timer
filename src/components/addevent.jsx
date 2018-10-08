import React, { Component } from "react";
import Editor from "./editor";

class AddEvent extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.areYouAddingAnEvent ? (
          <Editor
            onToggleEditor={this.props.onToggleEditor}
            onFormSubmit={this.props.onFormSubmit}
            onEventName={this.props.onEventName}
            onEventDate={this.props.onEventDate}
            onImageUrl={this.props.onImageUrl}
          />
        ) : (
          <React.Fragment>{this.dafaultView()}</React.Fragment>
        )}
      </React.Fragment>
    );
  }

  dafaultView() {
    return (
      <div className="container timer-container text-center m-4">
        <button
          className="container text-cente btn btn-warning shadowy"
          onClick={this.props.onToggleEditor}
        >
          <h2>Add Event</h2>
        </button>
      </div>
    );
  }
}

export default AddEvent;
