import React, { Component } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

class DeleteAllButtonGroup extends Component {
  state = {};
  render() {
    const { onDeleteAll } = this.props;
    return (
      <Tooltip TransitionComponent={Zoom} title="Delete all events">
        <button
          className="btn btn-outline-danger btn-lg m-2"
          onClick={onDeleteAll}
        >
          Clear all events
        </button>
      </Tooltip>
    );
  }
}

export default DeleteAllButtonGroup;
