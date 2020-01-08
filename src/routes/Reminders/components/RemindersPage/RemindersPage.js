import React from 'react';
import NewReminder from '../NewReminder';
import ReminderList from '../RemindersList';
import './remindersPage.css';

function ReminderPage() {
  return (
    <div className="reminder-page">
      <h1 className="title">Reminders</h1>
      <NewReminder />
      <ReminderList />
      {/* show new reminder  */}
      {/* show list of reminders  */}
    </div>
  );
}

export default ReminderPage;
