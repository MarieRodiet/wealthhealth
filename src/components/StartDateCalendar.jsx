import Calendar from 'react-select-date';
import { ReactComponent as CalendarSvg } from './../assets/calendar-solid.svg';
import { useState } from 'react';

export function addZero(num) {
  return num > 9 ? num : '0' + num;
}
export default function StartDateCalendar() {
  const currentDate =
    new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();

  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedStartDate, setSelectedStartDate] = useState(new Date());

  return (
    <div className="birthdate-calendar">
      <div className="birthdate-calendar-container" onClick={() => setShowCalendar(!showCalendar)}>
        <label>Start Date</label>
        <input
          readOnly
          value={
            addZero(selectedStartDate?.getDate()) +
            '-' +
            addZero(selectedStartDate?.getMonth()) +
            '-' +
            selectedStartDate?.getFullYear()
          }
          className="birthdate-calendar-container-input"
          id="date-of-birth"
          type="text"
        />
        <CalendarSvg className="birthdate-calendar-container-svg" />
      </div>
      <div style={{ display: showCalendar ? 'block' : 'none' }}>
        <Calendar
          defaultValue={{ date: currentDate }}
          showDateInputField={false}
          slotInfo={false}
          onSelect={(date) => setSelectedStartDate(date)}
        />
      </div>
    </div>
  );
}
