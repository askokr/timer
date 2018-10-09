import React, { Component } from "react";
import Editor from "./editor";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

class AddEvent extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.areYouAddingAnEvent ? (
          <Editor
            areYouAddingAnEvent={this.props.areYouAddingAnEvent}
            editableEvent={this.props.editableEvent}
            onEventDate={this.props.onEventDate}
            onEventName={this.props.onEventName}
            onImageUrl={this.props.onImageUrl}
            onFormSubmit={this.props.onFormSubmit}
            onToggleEditor={this.props.onToggleEditor}
            whatEventAreYouEditing={this.props.whatEventAreYouEditing}
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
        <Tooltip
          TransitionComponent={Zoom}
          placement="top"
          title="Add new event"
        >
          <button
            className="container text-cente btn btn-warning shadowy"
            onClick={this.props.onToggleEditor}
          >
            <h2>Add Event</h2>
          </button>
        </Tooltip>
      </div>
    );
  }
}

export default AddEvent;
