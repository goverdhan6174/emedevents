import { useState, useCallback, useMemo } from "react";
import cn from "classnames";
import Text from "../Text";
import Button from "../Button";
import { Left, Right } from "@components/icons";

const month = [
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
  "December",
];

const week = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function Calendar({ heading = "MY CALENDAR", date, className }) {
  const [showDate, setShowDate] = useState(date || new Date());

  const getSiblingMonthDates = useCallback(() => {
    let month = showDate.getMonth();

    let prevMonth = month - 1;
    if (prevMonth < 0) {
      prevMonth = 11;
    }

    let nextMonth = month + 1;
    if (nextMonth > 11) {
      nextMonth = 0;
    }

    let newDate = new Date(showDate);
    newDate.setMonth(prevMonth);
    if (prevMonth == 11) newDate.setFullYear(newDate.getFullYear() - 1);
    newDate.setDate(1);
    let date = new Date(newDate);

    //@TODO First Set the prev month
    //(current Reason: avoid checking and fast development)
    let prevMonthDays = [];
    while (date.getMonth() === prevMonth) {
      prevMonthDays.push(new Date(date));
      date.setUTCDate(date.getUTCDate() + 1);
    }

    let currentMonthDays = [];
    while (date.getMonth() === month) {
      currentMonthDays.push(new Date(date));
      date.setUTCDate(date.getUTCDate() + 1);
    }

    let nextMonthDays = [];
    while (date.getMonth() === nextMonth) {
      nextMonthDays.push(new Date(date));
      date.setUTCDate(date.getUTCDate() + 1);
    }

    return { prevMonthDays, currentMonthDays, nextMonthDays };
  }, [showDate]);

  const handleNext = () => {
    let date = new Date(showDate);
    date.setDate(1);
    date.setMonth(date.getMonth() + 1);
    setShowDate(date);
  };

  const handlePrev = () => {
    let date = new Date(showDate);
    date.setDate(1);
    date.setMonth(date.getMonth() - 1);
    setShowDate(date);
  };

  const calendarElement = useMemo(() => {
    let {
      prevMonthDays,
      currentMonthDays,
      nextMonthDays,
    } = getSiblingMonthDates();

    let elems = [];
    if (typeof currentMonthDays[0] == "undefined") return;
    let prevMonthDaysInCurrentWeek = currentMonthDays[0].getDay();
    if (prevMonthDaysInCurrentWeek > 0)
      prevMonthDays.splice(0 - prevMonthDaysInCurrentWeek).forEach((date) =>
        elems.push(
          <Text
            className="text-center text-accent-3 cursor-default"
            key={date.toISOString()}
          >
            {date.getDate()}
          </Text>
        )
      );

    //@TODO, remove fake event border
    let date = new Date();
    let today = date.toISOString().split("T")[0];
    let sameYear =
      showDate.getFullYear() == date.getFullYear() &&
      showDate.getMonth() == date.getMonth();
    elems.push(
      ...currentMonthDays.map((date) => {
        return (
          <Button
            key={date.toISOString()}
            variant="flex"
            active={date.toISOString().split("T")[0] == today}
          >
            <Text
              className={cn("text-center w-1/2", {
                "border-b-4 border-primary": sameYear && Math.random() > 0.9,
                "border-b-4 border-primary-2": sameYear && Math.random() > 0.9,
                "border-b-4 border-secondary": sameYear && Math.random() > 0.9,
                "border-b-4 border-secondary-2":
                  sameYear && Math.random() > 0.9,
              })}
              key={date.toISOString()}
            >
              {date.getDate()}
            </Text>
          </Button>
        );
      })
    );

    nextMonthDays
      .splice(0, 6 - currentMonthDays[currentMonthDays.length - 1].getDay())
      .forEach((date) =>
        elems.push(
          <Text
            className="text-center text-accent-3 cursor-default"
            key={date.toISOString()}
          >
            {date.getDate()}
          </Text>
        )
      );

    return elems;
  }, [showDate]);

  return (
    <div
      className={cn(
        "p-4 bg-white rounded-lg border border-accent-2 w-full",
        className
      )}
    >
      <Text variant="pageHeading">{heading}</Text>
      <div className="flex justify-between px-4 items-center">
        <Left className="cursor-pointer" onClick={handlePrev} />
        <div className="flex space-x-2">
          <Button variant="flex" style={{ padding: "0.2rem 0.4rem" }}>
            {" "}
            {month[showDate.getMonth()]}{" "}
          </Button>
          <Button variant="flex" style={{ padding: "0.2rem 0.4rem" }}>
            {" "}
            {showDate.getFullYear()}{" "}
          </Button>
        </div>
        <Right className="cursor-pointer" onClick={handleNext} />
      </div>
      <div className="grid grid-cols-7 items-center justify-center gap-1 mt-4">
        {week.map((day) => (
          <Text key={day} className="text-center text-accent-4">
            {day}
          </Text>
        ))}
        {calendarElement}
      </div>
    </div>
  );
}

export default Calendar;
