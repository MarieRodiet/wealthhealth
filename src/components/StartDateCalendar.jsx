import Calendar from 'react-select-date';
import { ReactComponent as CalendarSvg } from './../assets/calendar-solid.svg';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addStartDate } from '../features/newEmployeeSlice';
import { PropTypes } from 'prop-types';

export function addZero(num) {
  return num > 9 ? num : '0' + num;
}
export default function StartDateCalendar({ currentDate }) {
  const dispatch = useDispatch();

  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedStartDate, setSelectedStartDate] = useState(new Date());
  useEffect(() => {
    setShowCalendar(false);
    dispatch(addStartDate(selectedStartDate.toLocaleDateString()));
  }, [selectedStartDate]);
  return (
    <div className="startdate-calendar">
      <div className="startdate-calendar-container" onClick={() => setShowCalendar(!showCalendar)}>
        <label htmlFor="start-date">Start Date</label>
        <input
          readOnly
          value={
            addZero(selectedStartDate?.getDate()) +
            '-' +
            addZero(selectedStartDate?.getMonth()) +
            '-' +
            selectedStartDate?.getFullYear()
          }
          className="startdate-calendar-container-input"
          id="start-date"
          type="text"
        />
        <CalendarSvg className="startdate-calendar-container-svg" />
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

StartDateCalendar.propTypes = {
  currentDate: PropTypes.string
};
