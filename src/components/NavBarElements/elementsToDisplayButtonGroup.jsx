import React, { Component } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

class ElementsToDisplayButtonGroup extends Component {
  render() {
    const {
      onDisplayAll,
      onDisplayPassed,
      onDisplayUpcoming,
      whatEvetsToDisplay
    } = this.props;
    return (
      <div className="btn-group btn-group-toggle m-2" data-toggle="buttons">
        <Tooltip TransitionComponent={Zoom} title="Display passed events only">
          <button
            className={
              "btn btn-lg btn-" +
              (whatEvetsToDisplay === "passed" ? "" : "outline-") +
              "primary"
            }
            onClick={onDisplayPassed}
          >
            🡄
          </button>
        </Tooltip>
        <Tooltip TransitionComponent={Zoom} title="Display all events">
          <button
            className={
              "btn btn-lg btn-" +
              (whatEvetsToDisplay === "all" ? "" : "outline-") +
              "primary"
            }
            onClick={onDisplayAll}
          >
            🡀🡂
          </button>
        </Tooltip>
        <Tooltip
          TransitionComponent={Zoom}
          title="Display upcoming events only"
        >
          <button
            className={
              "btn btn-lg btn-" +
              (whatEvetsToDisplay === "upcoming" ? "" : "outline-") +
              "primary"
            }
            onClick={onDisplayUpcoming}
          >
            🡆
          </button>
        </Tooltip>
      </div>
    );
  }
}

export default ElementsToDisplayButtonGroup;
