import React, { Component } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import Octicon from "react-octicon";

class ElementsToDisplayButtonGroup extends Component {
  render() {
    const { onDisplay, whatEvetsToDisplay } = this.props;
    return (
      <div className="btn-group btn-group-toggle m-2" data-toggle="buttons">
        <Tooltip TransitionComponent={Zoom} title="Display passed events only">
          <button
            className={
              "btn btn-lg btn-" +
              (whatEvetsToDisplay === "passed" ? "" : "outline-") +
              "primary"
            }
            onClick={() => onDisplay("passed")}
          >
            <Octicon name="chevron-left" />
          </button>
        </Tooltip>
        <Tooltip TransitionComponent={Zoom} title="Display all events">
          <button
            className={
              "btn btn-lg btn-" +
              (whatEvetsToDisplay === "all" ? "" : "outline-") +
              "primary"
            }
            onClick={() => onDisplay("all")}
          >
            <Octicon name="code" />
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
            onClick={() => onDisplay("upcoming")}
          >
            <Octicon name="chevron-right" />
          </button>
        </Tooltip>
      </div>
    );
  }
}

export default ElementsToDisplayButtonGroup;
