import { useFirestore, useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

function useReminders() {
  const firestore = useFirestore();
  const auth = useSelector(state => state.firebase.auth);

  useFirestoreConnect([
    {
      collection: 'reminders',
      where: ['createdBy', '==', auth.uid],
    },
  ]);

  const reminders = useSelector(state => state.firestore.ordered.reminders);

  function addReminder({ text, date }) {
    return firestore
      .add('reminders', {
        text,
        date,
        createdBy: auth.uid,
        createdAt: firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        console.log('reminder added');
      })
      .catch(err => {
        console.error('Error:', err);
        return Promise.reject(err);
      });
  }

  function deleteReminder(reminderId) {
    return firestore
      .delete(`reminders/${reminderId}`)
      .then(() => {
        console.log('success in deleting');
      })
      .catch(err => {
        console.error('Error:', err); // eslint-disable-line no-console
        return Promise.reject(err);
      });
  }
  return { reminders, addReminder, deleteReminder };
}

export default useReminders;
