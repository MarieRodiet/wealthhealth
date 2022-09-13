import CalendarSelect from 'react-select-date';
import { ReactComponent as CalendarSvg } from './../assets/calendar-solid.svg';
import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';

export function addZero(num) {
  return num > 9 ? num : '0' + num;
}
export default function Calendar({ currentDate, setValue, label, name }) {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    setShowCalendar(false);
  }, [setSelectedDate]);

  return (
    <div className="calendar">
      <div className="calendar-container">
        <label htmlFor={name}>{label ? label : ''}</label>
        <input
          readOnly
          value={
            addZero(selectedDate?.getDate()) +
            '-' +
            addZero(selectedDate?.getMonth()) +
            '-' +
            selectedDate?.getFullYear()
          }
          className="calendar-container-input"
          id={name}
          type="text"
        />
        <CalendarSvg
          className="calendar-container-svg"
          onClick={() => setShowCalendar(!showCalendar)}
        />
      </div>
      <div style={{ display: showCalendar ? 'block' : 'none' }}>
        <CalendarSelect
          defaultValue={{ date: currentDate }}
          showDateInputField={false}
          slotInfo={false}
          onChange={(date) => {
            setSelectedDate(date);
          }}
          onSelect={(e) => {
            setSelectedDate(e);
            setValue(name, e.toLocaleDateString());
          }}
        />
      </div>
    </div>
  );
}

Calendar.propTypes = {
  currentDate: PropTypes.string,
  setValue: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string.isRequired
};
