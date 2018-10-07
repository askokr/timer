import React from "react";
import Clock from "./clock";

const NavBar = ({
  time,
  onDeleteAll,
  onSortAscending,
  onSortDescending,
  onSortByKey,
  onWriteCookie,
  onReadCookie
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
            className="btn btn-outline-success btn-lg "
            onClick={onReadCookie}
          >
            Load
          </button>
        </div>

        <div className="btn-group btn-group-toggle m-2" data-toggle="buttons">
          <button
            className="btn btn-outline-primary btn-lg"
            onClick={onSortAscending}
          >
            ⇑
          </button>
          <button
            className="btn btn-outline-primary btn-lg"
            onClick={onSortByKey}
          >
            <span role="img" aria-label="by id" aria-labelledby="me">
              🔑
            </span>
          </button>
          <button
            className="btn btn-outline-primary btn-lg "
            onClick={onSortDescending}
          >
            ⇓
          </button>
        </div>

        <button
          className="btn btn-outline-danger btn-lg m-2"
          onClick={onDeleteAll}
        >
          Clear all events
        </button>
      </div>
      <Clock time={time} />
    </nav>
  );
};

export default NavBar;
