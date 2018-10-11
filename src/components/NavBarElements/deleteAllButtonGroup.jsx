import React, { Component } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

class DeleteAllButtonGroup extends Component {
  render() {
    const { onDelete } = this.props;
    return (
      <Tooltip TransitionComponent={Zoom} title="Delete all events">
        <button
          className="btn btn-outline-danger btn-lg m-2"
          onClick={() => onDelete("all")}
        >
          Clear all events
        </button>
      </Tooltip>
    );
  }
}

export default DeleteAllButtonGroup;
