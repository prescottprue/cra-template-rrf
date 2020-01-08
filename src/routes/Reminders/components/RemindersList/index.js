import React from 'react';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import Reminder from '../Reminder';
import useReminders from '../../hooks/useReminders';
import LoadingSpinner from '../../../../components/LoadingSpinner';
import './reminderList.css';

function ReminderList() {
  const { reminders } = useReminders();

  if (!isLoaded(reminders)) {
    return <LoadingSpinner />;
  }
  return (
    <div className="reminders-container-top">
      {isEmpty(reminders) && <div>No saved reminders</div>}
      {!isEmpty(reminders) && (
        <div>
          <h5>Saved Reminders</h5>
          <ul className="reminders-container">
            {reminders.map((reminder, index) => {
              return (
                <Reminder
                  // eslint-disable-next-line react/no-array-index-key
                  key={`Reminder-${reminder.id}-${index}`}
                  text={reminder && reminder.text}
                  reminderId={reminder.id}
                  date={reminder.date}
                />
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ReminderList;
