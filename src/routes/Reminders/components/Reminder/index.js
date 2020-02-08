import React from 'react';
import PropTypes from 'prop-types';
import useReminders from '../../hooks/useReminders';
import './reminder.css';

function Reminder({ text, reminderId, date }) {
  const { deleteReminder } = useReminders();

  return (
    <li className="li-reminder">
      <div className="reminder-root">
        <div className="reminder-text">{text}</div>
        <div className="reminder-date">
          <em>{date}</em>
        </div>
        <div
          role="button"
          tabIndex={0}
          className="delete-icon"
          onKeyDown={() => deleteReminder(reminderId)}
          onClick={() => deleteReminder(reminderId)}
        >
          &#x2715;
        </div>
      </div>
    </li>
  );
}

Reminder.propTypes = {
  text: PropTypes.string.isRequired,
  reminderId: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Reminder;
