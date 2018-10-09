import React from "react";
import Clock from "./clock";

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
          <button
            className="btn btn-outline-success btn-lg"
            onClick={onWriteCookie}
          >
            Save
          </button>
          <button
            className={
              "btn btn-lg btn-" +
              (document.cookie !== "" ? "" : "outline-") +
              "success"
            }
            onClick={onReadCookie}
          >
            Load
          </button>
        </div>

        <button
          className="btn btn-outline-danger btn-lg m-2"
          onClick={onDeleteAll}
        >
          Clear all events
        </button>

        <div className="btn-group btn-group-toggle m-2" data-toggle="buttons">
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
          <button
            className={
              "btn btn-lg btn-" +
              (sortDirection === "byKey" ? "" : "outline-") +
              "primary"
            }
            onClick={onSortByKey}
          >
            <span role="img" aria-label="by id" aria-labelledby="me">
              🖊
            </span>
          </button>
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
        </div>

        <div className="btn-group btn-group-toggle m-2" data-toggle="buttons">
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
        </div>
      </div>
      <Clock time={time} />
    </nav>
  );
};

export default NavBar;
