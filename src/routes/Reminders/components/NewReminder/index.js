import React, { useState } from 'react';
import useReminders from '../../hooks/useReminders';
import './newReminder.css';
import TextField from '../../../../components/TextField';
import Button from '../../../../components/Button';

function NewReminder() {
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const { addReminder } = useReminders();

  return (
    <div className="new-reminder-root">
      <div className="fields-container">
        <TextField
          className="input-field-reminder"
          placeholder="What you have to do?"
          type="text"
          value={text}
          onChange={event => setText(event.target.value)}
        />
        <TextField
          className="input-field-reminder"
          type="date"
          value={date}
          onChange={event => setDate(event.target.value)}
        />
      </div>
      <Button
        type="button"
        className="button-add-reminder"
        onClick={() => {
          if (!text || !date) {
            return;
          }
          setText('');
          setDate('');
          addReminder({ text, date });
        }}
      >
        Add Reminder
      </Button>
    </div>
  );
}

export default NewReminder;
