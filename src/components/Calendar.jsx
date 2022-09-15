import DatePicker from 'react-datepicker';
import { useState } from 'react';
import { PropTypes } from 'prop-types';

export default function Calendar({ setValue, label, name }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="calendar">
      <label className="calendar-label" htmlFor={name}>
        {label ? label : ''}
      </label>
      <DatePicker
        className="calendar-datepicker"
        selected={selectedDate}
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
  );
}

Calendar.propTypes = {
  setValue: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string.isRequired
};
