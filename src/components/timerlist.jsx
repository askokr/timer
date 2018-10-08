import React from "react";
import TimerDisplay from "./timerdisplay";
import AddEvent from "./addevent";

const TimerList = ({
  events,
  time,
  onDelete,
  onToggleEditor,
  areYouAddingAnEvent,
  onFormSubmit,
  onEventName,
  onEventDate,
  onImageUrl
}) => {
  const eventsToRender = events;
  return (
    <React.Fragment>
      <AddEvent
        time={time}
        onToggleEditor={onToggleEditor}
        areYouAddingAnEvent={areYouAddingAnEvent}
        onFormSubmit={onFormSubmit}
        onEventName={onEventName}
        onEventDate={onEventDate}
        onImageUrl={onImageUrl}
      />
      {eventsToRender.map(event => (
        <TimerDisplay
          event={event}
          time={time}
          onDelete={onDelete}
          key={event.eventId}
        />
      ))}
      <div className="container m-4 bottom-filler" />
    </React.Fragment>
  );
};

export default TimerList;
