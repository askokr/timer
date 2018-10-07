import React from "react";
import TimerDisplay from "./timerdisplay";
import AddEvent from "./addevent";

const TimerList = ({ events, time, onDelete, onAddEvent }) => {
  const eventsToRender = events.filter(c => c.eventId !== 0);
  return (
    <React.Fragment>
      <AddEvent time={time} onAddEvent={onAddEvent} />
      {eventsToRender.map(event => (
        <TimerDisplay
          event={event}
          time={time}
          onDelete={onDelete}
          key={event.eventId}
        />
      ))}
    </React.Fragment>
  );
};

export default TimerList;
