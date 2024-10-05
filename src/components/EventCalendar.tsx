"use client"
import 'react-calendar/dist/Calendar.css';
import { useState } from "react";
import Calendar from "react-calendar";

type ValuePiece = Date | null

type Value = ValuePiece | [ValuePiece, ValuePiece]

export const eventsData = [
  {
    id: 1,
    title: "Lake Trip",
    class: "1A",
    date: "2025-01-01",
    startTime: "10:00",
    endTime: "11:00",
  },
];

const EventCalendar = () => {

  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} />
      <div className='flex flex-col gap-4'>
        {eventsData.map(event => (
          <div className='' key={event.id}>
            <div className='flex justify-between items-center'>
              <h1>{event.title}</h1>
              <span>{event.startTime}</span>
            </div>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventCalendar