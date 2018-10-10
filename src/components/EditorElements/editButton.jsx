import React, { Component } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

class EditButton extends Component {
  render() {
    return this.editButton();
  }
  editButton = () => {
    const { onFormSubmit, whatEventAreYouEditing } = this.props;
    if (whatEventAreYouEditing === null) {
      return (
        <Tooltip
          TransitionComponent={Zoom}
          placement="top"
          title="Add event to list"
        >
          <button onClick={onFormSubmit} className="btn btn-warning m-4">
            Add new event
          </button>
        </Tooltip>
      );
    } else {
      return (
        <Tooltip
          TransitionComponent={Zoom}
          placement="top"
          title="Save the changes you have made to the event"
        >
          <button onClick={onFormSubmit} className="btn btn-warning m-4">
            Save edits to event
          </button>
        </Tooltip>
      );
    }
  };
}

export default EditButton;
