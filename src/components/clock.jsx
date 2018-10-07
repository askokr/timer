import React from "react";

const Clock = ({ time }) => {
  const y = time.getFullYear();
  const M = time.getMonth();
  const d = time.getDate();
  const h = time.getHours();
  const m = time.getMinutes();
  const s = time.getSeconds();
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
  return (
    <h1 className="text-white">
      {d + ". "}
      {months[M] + " "}
      {y + "     "}
      {h % 24}:{m < 10 ? "0" + m : m}:{s < 10 ? "0" + s : s}
    </h1>
  );
};

export default Clock;
