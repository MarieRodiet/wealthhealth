import Calendar from 'react-select-date';
import { ReactComponent as CalendarSvg } from './../assets/calendar-solid.svg';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addBirthDate } from '../features/newEmployeeSlice';
import { PropTypes } from 'prop-types';

export function addZero(num) {
  return num > 9 ? num : '0' + num;
}
export default function BirthDateCalendar({ currentDate }) {
  const dispatch = useDispatch();

  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedBirthDate, setSelectedBirthDate] = useState(new Date());

  useEffect(() => {
    setShowCalendar(false);
    dispatch(addBirthDate(selectedBirthDate.toLocaleDateString()));
  }, [selectedBirthDate]);

  return (
    <div className="birthdate-calendar">
      <div className="birthdate-calendar-container" onClick={() => setShowCalendar(!showCalendar)}>
        <label htmlFor="date-of-birth">Date of Birth</label>
        <input
          readOnly
          value={
            addZero(selectedBirthDate?.getDate()) +
            '-' +
            addZero(selectedBirthDate?.getMonth()) +
            '-' +
            selectedBirthDate?.getFullYear()
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
          onSelect={(date) => setSelectedBirthDate(date)}
        />
      </div>
    </div>
  );
}

BirthDateCalendar.propTypes = {
  currentDate: PropTypes.string
};
