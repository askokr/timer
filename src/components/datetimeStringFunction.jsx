function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
function datetimeStringFunction(eventDate) {
  const rawDate = new Date(eventDate);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Thursday",
    "Wednesday",
    "Fryday",
    "Satturday"
  ];
  const dateString =
    days[rawDate.getDay()] +
    ", " +
    months[rawDate.getMonth()] +
    " " +
    rawDate.getDate() +
    ", " +
    rawDate.getFullYear() +
    " " +
    addZero(rawDate.getHours()) +
    ":" +
    addZero(rawDate.getMinutes());

  return dateString;
}

export default datetimeStringFunction;
