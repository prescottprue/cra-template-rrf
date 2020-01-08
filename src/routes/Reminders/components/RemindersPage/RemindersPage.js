import React from 'react';
import { useFirebase } from 'react-redux-firebase';
import NewReminder from '../NewReminder';
import ReminderList from '../RemindersList';
import './remindersPage.css';
import Toolbar from '../../../../components/Toolbar';
import logout from '../../../../statics/logout.svg';
import rrf from '../../../../statics/rrf.png';

function ReminderPage() {
  const firebase = useFirebase();

  return (
    <div className="reminder-page">
      <Toolbar title="Reminders">
        <Toolbar.Left icon={rrf}></Toolbar.Left>
        <Toolbar.Right
          icon={logout}
          onClick={() => firebase.logout()}
        ></Toolbar.Right>
      </Toolbar>
      <div className="toolbar-spacing" />
      <NewReminder />
      <ReminderList />
    </div>
  );
}

export default ReminderPage;
