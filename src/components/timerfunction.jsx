import React from "react";

function timerFunction(props) {
  const event = new Date(props.event.eventDate);
  const time = new Date(props.time);

  const eventHasPassed = event - time <= 0;

  let {
    timeToEvent,
    daysToEvent,
    hoursToEvent,
    minutesToEvent,
    secondsToEvent,
    daysToEventLeftoverInMs,
    hoursToEventLeftoverInMs,
    minutesToEventLeftoverInMs,
    moreThanAnHourLeft
  } = 0;

  if (isNaN(event) || event === "") {
    return "";
  }

  if (!eventHasPassed) {
    const msInDay = 8.64e7;
    const msInHour = 3.6e6;
    const msInMinute = 60000;
    const msInSecond = 1000;

    timeToEvent = event - time;
    daysToEvent = Math.floor(timeToEvent / msInDay);
    daysToEventLeftoverInMs = timeToEvent - daysToEvent * msInDay;
    hoursToEvent = Math.floor(daysToEventLeftoverInMs / msInHour);
    hoursToEventLeftoverInMs =
      daysToEventLeftoverInMs - hoursToEvent * msInHour;
    minutesToEvent = Math.floor(hoursToEventLeftoverInMs / msInMinute);
    minutesToEventLeftoverInMs =
      hoursToEventLeftoverInMs - minutesToEvent * msInMinute;
    secondsToEvent = Math.floor(minutesToEventLeftoverInMs / msInSecond);
    moreThanAnHourLeft = timeToEvent > msInHour;
  }

  if (!eventHasPassed) {
    return (
      <React.Fragment>
        {daysToEvent > 0
          ? daysToEvent + " day" + (daysToEvent !== 1 ? "s" : "") + ", "
          : ""}
        {hoursToEvent > 0
          ? hoursToEvent + " hour" + (hoursToEvent !== 1 ? "s" : "") + ", "
          : ""}
        {minutesToEvent > 0
          ? minutesToEvent +
            " minute" +
            (minutesToEvent !== 1 ? "s" : "") +
            (moreThanAnHourLeft ? "," : "") +
            " and "
          : ""}
        {secondsToEvent} {" second" + (secondsToEvent !== 1 ? "s" : "") + "."}
      </React.Fragment>
    );
  } else {
    return "Event has passed.";
  }
}

export default timerFunction;
