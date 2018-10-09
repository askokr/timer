import React from "react";
import Clock from "./clock";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import Octicon from "react-octicon";

let isThereACookie = document.cookie !== "" ? true : false;

const NavBar = ({
  onDeleteAll,
  onDisplayAll,
  onDisplayPassed,
  onDisplayUpcoming,
  onReadCookie,
  onSortAscending,
  onSortByKey,
  onSortDescending,
  onWriteCookie,
  sortDirection,
  time,
  whatEvetsToDisplay
}) => {
  return (
    <nav className="navbar sticky-top navbar-light bg-dark">
      <div className="row">
        {/* <h1 className="text-white m-4">Events</h1> */}

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
                "btn btn-lg btn-" +
                (isThereACookie ? "" : "outline-") +
                "success"
              }
              onClick={onReadCookie}
            >
              Load
            </button>
          </Tooltip>
        </div>

        <Tooltip TransitionComponent={Zoom} title="Delete all events">
          <button
            className="btn btn-outline-danger btn-lg m-2"
            onClick={onDeleteAll}
          >
            Clear all events
          </button>
        </Tooltip>

        <div className="btn-group btn-group-toggle m-2" data-toggle="buttons">
          <Tooltip TransitionComponent={Zoom} title="Sort in ascending order">
            <button
              className={
                "btn btn-lg btn-" +
                (sortDirection === "ascending" ? "" : "outline-") +
                "primary"
              }
              onClick={onSortAscending}
            >
              🡅
            </button>
          </Tooltip>
          <Tooltip TransitionComponent={Zoom} title="Sort by order of addition">
            <button
              className={
                "btn btn-lg btn-" +
                (sortDirection === "byKey" ? "" : "outline-") +
                "primary"
              }
              onClick={onSortByKey}
            >
              <Octicon name="pencil" />
            </button>
          </Tooltip>
          <Tooltip TransitionComponent={Zoom} title="Sort in descending order">
            <button
              className={
                "btn btn-lg btn-" +
                (sortDirection === "descending" ? "" : "outline-") +
                "primary"
              }
              onClick={onSortDescending}
            >
              🡇
            </button>
          </Tooltip>
        </div>

        <div className="btn-group btn-group-toggle m-2" data-toggle="buttons">
          <Tooltip
            TransitionComponent={Zoom}
            title="Display passed events only"
          >
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
      </div>
      <Clock time={time} />
    </nav>
  );
};

export default NavBar;
