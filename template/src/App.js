import React from 'react';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import configureStore from './store';
import Home from './Home';
import { fbConfig, rfConfig } from './config';

// Initialize Firebase instance
firebase.initializeApp(fbConfig || process.env.REACT_APP_FIREBASE_CONFIG)

const store = configureStore()

function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider
        firebase={firebase}
        config={rfConfig}
        dispatch={store.dispatch}
        createFirestoreInstance={createFirestoreInstance}>
        <Home />
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
