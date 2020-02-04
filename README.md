# cra-template-rrf

This is the base template for react-redux-firebase.

To use, specify like so: `create-react-app my-app --template rrf`

Once it is installed modify `src/config.js` and put real data in this file
Here is an example file:

```
export const rfConfig = {
  userProfile: 'users', // root that user profiles are written to
  useFirestoreForProfile: true, // Save profile to Firestore instead of Real Time Database
  useFirestoreForStorageMeta: true, // Metadata associated with storage file uploads goes to Firestore
};

// Config for firebase
export const fbConfig = {
  apiKey: ' AIzadumA0d1K8ycDifChLt83L8l2dAzNEsEXETAM ',
  authDomain: 'reduxfirebaseexample-bb8f54.firebaseapp.com',
  databaseURL: 'https://reduxfirebaseexample-cc8f4.firebaseio.com',
  projectId: 'reduxfirebaseexample-bb4f4',
  storageBucket: 'reduxfirebaseexample-bb4f4.appspot.com',
  messagingSenderId: '791987320751',
  measurementId: '791987320751',
  appId: '1:791938380751:web:e7d8c463fde349e9280d5a',
};

export const segmentId = '';

export const publicVapidKey =
  'BLFE71Qyl5H66TCrLz8RdWJKipJBEiw5TsJIPwm4gc0pCcucfRj1tSwHPRJad4c85fJraDYubWRVrQo_2E3PLzo';
``` 

For more information, please refer to:

- [Getting Started](https://create-react-app.dev/docs/getting-started) – How to create a new app.
- [User Guide](https://create-react-app.dev) – How to develop apps bootstrapped with Create React App.