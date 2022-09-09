import CalendarSelect from 'react-select-date';
import { ReactComponent as CalendarSvg } from './../assets/calendar-solid.svg';
import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';

export function addZero(num) {
  return num > 9 ? num : '0' + num;
}
export default function Calendar({ currentDate, setValue, dateType }) {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    setShowCalendar(false);
  }, [setSelectedDate]);

  return (
    <div className="calendar">
      <div className="calendar-container">
        <label htmlFor={dateType === 'BirthDate' ? 'date-of-birth' : 'starting date'}>
          {dateType === 'BirthDate' ? 'Date of Birth' : ' Start Date'}
        </label>
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
          id={dateType === 'BirthDate' ? 'date-of-birth' : 'starting date'}
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
            setValue(dateType, e.toLocaleDateString());
            // {
            //   dateType === 'BirthDate'
            //     ? setValue('BirthDate', e.toLocaleDateString())
            //     : setValue('StartDate', e.toLocaleDateString());
            // }
          }}
        />
      </div>
    </div>
  );
}

Calendar.propTypes = {
  currentDate: PropTypes.string,
  setValue: PropTypes.func,
  dateType: PropTypes.string
};
