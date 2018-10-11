import React, { Component } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

class CloseButton extends Component {
  render() {
    return this.closeButton();
  }

  closeButton = () => {
    const { whatEventAreYouEditing, onToggle } = this.props;
    if (whatEventAreYouEditing === null) {
      return (
        <Tooltip
          TransitionComponent={Zoom}
          placement="top"
          title="Cancel adding new event, clear all field"
        >
          <button
            onClick={() => onToggle("editor")}
            className="btn btn-danger m-4 btn-lg"
          >
            Close
          </button>
        </Tooltip>
      );
    } else {
      return (
        <Tooltip
          TransitionComponent={Zoom}
          placement="top"
          title="Cancel editing this event, keep all old values"
        >
          <button
            onClick={() => onToggle("event")}
            className="btn btn-danger m-4 btn-lg"
          >
            Close editor
          </button>
        </Tooltip>
      );
    }
  };
}

export default CloseButton;
