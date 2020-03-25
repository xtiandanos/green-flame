// import firebase from 'firebase';
// import 'firebase/app';
// import 'firebase/firestore';

// type userProfile = {
//   id: string;
//   firstName: string;
//   lastName: string;
//   email: string;
//   mobileNumber: string;
// };

// const appConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSENGER_SENDER_ID,
// };

// if (!firebase.apps.length) {
//   firebase.initializeApp(appConfig);
// }

// const auth = firebase.auth();
// const db = firebase.firestore();

// const signOutUser = () => auth.signOut();

// const signUp = (email: string, password: string) =>
//   auth
//     .createUserWithEmailAndPassword(email, password)
//     .then(user => user)
//     .catch(error => {
//       throw error;
//     });

// const getIdToken = (user: any) =>
//   user
//     .getIdToken()
//     .then((token: string) => token)
//     .catch((error: string) => {
//       throw error;
//     });

// const createUserProfile = (data: userProfile) =>
//   db
//     .collection('users')
//     .doc(data.id)
//     .set({ ...data })
//     .then(() => console.log('user added to database'))
//     .catch((error: string) => console.log('error', error));

// const signIn = (email: string, password: string) =>
//   auth
//     .signInWithEmailAndPassword(email, password)
//     .then(user => user)
//     .catch((error: string) => {
//       throw error;
//     });

// const getSocialMediaLoginResult = () =>
//   firebase
//     .auth()
//     .getRedirectResult()
//     .then(result => result)
//     .catch(err => console.log(err));

// const getUserData = (id: string) =>
//   db
//     .collection('users')
//     .doc(id)
//     .get()
//     .then(doc => doc.data())
//     .catch(err => console.log(err, 'unable to fetch'));

// export {
//   signOutUser,
//   signUp,
//   getIdToken,
//   createUserProfile,
//   signIn,
//   getSocialMediaLoginResult,
//   getUserData,
// };
