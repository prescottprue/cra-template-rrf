import { combineReducers } from 'redux';
import { firestoreReducer as firestore } from 'redux-firestore';
import { firebaseReducer as firebase } from 'react-redux-firebase';

const rootReducer = combineReducers({
  firestore,
  firebase,
});

export default rootReducer;
