import React from "react";
import TimerDisplay from "./timerdisplay";
import AddEvent from "./addevent";
import Editor from "./editor";

const TimerList = ({
  events,
  time,
  onDelete,
  onEdit,
  whatEventAreYouEditing,
  onToggleEventEditor,
  onToggleEditor,
  areYouAddingAnEvent,
  onFormSubmit,
  onEventName,
  onEventDate,
  onImageUrl
}) => {
  const eventsToRender = events.filter(event => event.eventId !== 0);
  const editableEvent = events.find(event => event.eventId === 0);
  return (
    <React.Fragment>
      <AddEvent
        areYouAddingAnEvent={areYouAddingAnEvent}
        editableEvent={editableEvent}
        onEventDate={onEventDate}
        onEventName={onEventName}
        onImageUrl={onImageUrl}
        onFormSubmit={onFormSubmit}
        onToggleEditor={onToggleEditor}
        time={time}
        whatEventAreYouEditing={whatEventAreYouEditing}
      />
      {eventsToRender.map(event => {
        if (event.eventId !== whatEventAreYouEditing) {
          return (
            <TimerDisplay
              event={event}
              time={time}
              onDelete={onDelete}
              onEdit={onEdit}
              key={event.eventId}
            />
          );
        } else {
          return (
            <Editor
              areYouAddingAnEvent={areYouAddingAnEvent}
              editableEvent={editableEvent}
              key={event.eventId}
              onEventDate={onEventDate}
              onEventName={onEventName}
              onFormSubmit={onFormSubmit}
              onImageUrl={onImageUrl}
              onToggleEditor={onToggleEditor}
              onToggleEventEditor={onToggleEventEditor}
              whatEventAreYouEditing={whatEventAreYouEditing}
            />
          );
        }
      })}
      <div className="container m-4 bottom-filler" />
    </React.Fragment>
  );
};

export default TimerList;
