import React from "react";
import Clock from "./NavBarElements/clock";
import SaveLoadButtonGruop from "./NavBarElements/saveLoadButtonGroup";
import SortOrderButtonGroup from "./NavBarElements/sortOrderButtonGroup";
import ElementsToDisplayButtonGroup from "./NavBarElements/elementsToDisplayButtonGroup";
import DeleteAllButtonGroup from "./NavBarElements/deleteAllButtonGroup";

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
  let isThereACookie = document.cookie !== "" ? true : false;
  return (
    <nav className="navbar sticky-top navbar-light bg-dark">
      <div className="row">
        {/* <h1 className="text-white m-4">Events</h1> */}

        <SaveLoadButtonGruop
          onReadCookie={onReadCookie}
          onWriteCookie={onWriteCookie}
          isThereACookie={isThereACookie}
        />

        <DeleteAllButtonGroup onDeleteAll={onDeleteAll} />

        <SortOrderButtonGroup
          onSortAscending={onSortAscending}
          onSortByKey={onSortByKey}
          onSortDescending={onSortDescending}
          sortDirection={sortDirection}
        />

        <ElementsToDisplayButtonGroup
          onDisplayAll={onDisplayAll}
          onDisplayPassed={onDisplayPassed}
          onDisplayUpcoming={onDisplayUpcoming}
          whatEvetsToDisplay={whatEvetsToDisplay}
        />
      </div>
      <Clock time={time} />
    </nav>
  );
};

export default NavBar;
