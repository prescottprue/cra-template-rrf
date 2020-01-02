export const fbConfig = {
  apiKey: 'your-project api key',
  authDomain: 'your-project.firebaseapp.com',
  databaseURL: 'https://your-project.firebaseio.com',
  storageBucket: 'your-project.appspot.com',
  messagingSenderId: '823357791673',
  projectId: 'your-project',
}

export const rfConfig = {
  userProfile: 'users', // root that user profiles are written to
  useFirestoreForProfile: true, // Save profile to Firestore instead of Real Time Database
  useFirestoreForStorageMeta: true // Metadata associated with storage file uploads goes to Firestore
}
