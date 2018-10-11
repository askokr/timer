import React, { Component } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import Octicon from "react-octicon";

class Buttons extends Component {
  render() {
    const {
      eventId,
      favouriteEvent,
      onDelete,
      onEdit,
      onFavourite
    } = this.props;
    return (
      <div className="text-container-button d-flex flex-column">
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
        <Tooltip
          TransitionComponent={Zoom}
          placement="left"
          title={
            eventId === favouriteEvent
              ? "Current favourite"
              : "Set as favourite"
          }
        >
          <button
            className="btn btn-link btn-lg"
            style={
              eventId === favouriteEvent ? { color: "red" } : { color: "black" }
            }
            onClick={() => onFavourite(eventId)}
          >
            <Octicon name="heart" mega />
          </button>
        </Tooltip>
      </div>
    );
  }
}

export default Buttons;
