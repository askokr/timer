import React, { Component } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import Octicon from "react-octicon";

class SaveLoadButtonGruop extends Component {
  render() {
    const {
      onWriteCookie,
      onReadCookie,
      isThereACookie,
      onDelete
    } = this.props;
    return (
      <div className="btn-group btn-group-toggle m-2" data-toggle="buttons">
        <Tooltip TransitionComponent={Zoom} title="Save events as a cookie">
          <button
            className="btn btn-outline-success btn-lg"
            onClick={onWriteCookie}
          >
            Save
          </button>
        </Tooltip>
        <Tooltip TransitionComponent={Zoom} title="Load events from cookie">
          <button
            className={
              "btn btn-lg btn-" + (isThereACookie ? "" : "outline-") + "success"
            }
            onClick={onReadCookie}
          >
            Load
          </button>
        </Tooltip>
        <Tooltip TransitionComponent={Zoom} title="Delete cookie">
          <button
            className={
              "btn btn-lg btn-" + (isThereACookie ? "" : "outline-") + "danger"
            }
            onClick={() => onDelete("cookie")}
          >
            <Octicon name="trashcan" />
          </button>
        </Tooltip>
      </div>
    );
  }
}

export default SaveLoadButtonGruop;
