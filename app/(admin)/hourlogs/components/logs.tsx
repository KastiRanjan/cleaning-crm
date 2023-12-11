"use client";
import React from "react";
import Timeline from "react-calendar-timeline";
// make sure you include the timeline stylesheet or the timeline will not be styled
import "react-calendar-timeline/lib/Timeline.css";
import moment from "moment";

const groups = [
  { id: 1, title: "Ram" },
  { id: 2, title: "Shyam" },
  { id: 3, title: "Shyam" },
  { id: 4, title: "Shyam" },
  { id: 5, title: "Shyam" },
  { id: 6, title: "Shyam" },
  { id: 7, title: "Shyam" },
  { id: 8, title: "Shyam" },
  { id: 9, title: "Shyam" },
  { id: 10, title: "Shyam" },
  { id: 11, title: "Shyam" },
];

const items = [
  {
    id: 1,
    group: 1,
    title: "item 1",
    start_time: moment(),
    end_time: moment().add(1, "hour"),
  },
  {
    id: 2,
    group: 2,
    title: "item 2",
    start_time: moment().add(-0.5, "hour"),
    end_time: moment().add(0.5, "hour"),
  },
  {
    id: 3,
    group: 1,
    title: "item 3",
    start_time: moment().add(2, "hour"),
    end_time: moment().add(3, "hour"),
  },
];
type Props = {};

const Logs = (props: Props) => {
  return (
    <Timeline
      groups={groups}
      items={items}
      defaultTimeStart={moment().add(-12, "hour")}
      defaultTimeEnd={moment().add(12, "hour")}
      buffer={1}
    />
  );
};

export default Logs;
