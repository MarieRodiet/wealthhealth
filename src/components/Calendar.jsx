import DatePicker from 'react-datepicker';
import { useState } from 'react';
import { PropTypes } from 'prop-types';

export default function Calendar({ setValue, label, name }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  setValue(label, selectedDate.toLocaleDateString());
  const input = document.getElementsByClassName('calendar-datepicker');
  for (let i of input) {
    i.setAttribute('aria-labelledBy', `"${name}"`);
    console.log(i);
  }

  return (
    <div className="calendar">
      <label className="calendar-label" htmlFor={name} aria-label="date-picker">
        {label ? label : ''}
      </label>
      <DatePicker
        id={name}
        name={name}
        aria-label={name}
        className="calendar-datepicker"
        selected={selectedDate}
        slotInfo={false}
        onChange={(date) => {
          setSelectedDate(date);
        }}
        onSelect={(e) => {
          setSelectedDate(e);
          setValue(label, e.toLocaleDateString());
        }}
      />
    </div>
  );
}

Calendar.propTypes = {
  setValue: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string.isRequired
};
