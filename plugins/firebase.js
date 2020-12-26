import firebase from 'firebase/app'
import 'firebase/auth'

if (!firebase.apps.length) {
 const config = {
   apiKey: "AIzaSyDYzrKzNdQlPYQgg0ESdW-dmV94xiycndY",
   authDomain: "atcoder-rivals.firebaseapp.com",
   projectId: "atcoder-rivals",
   storageBucket: "atcoder-rivals.appspot.com",
   messagingSenderId: "385533054515",
   appId: "1:385533054515:web:58443f89461172e55e9d46",
   measurementId: "G-0R3T6EQTGR"
 }
 firebase.initializeApp(config)
}

export const auth = firebase.auth();

// export const registerFirebaseAuthStateObserver = (signinCallback, signoutCallback) => {
//   firebase.auth().onAuthStateChanged(user => {
//     if (user) {
//       // ログインされたとき
//       console.log('=== SIGNIN');
//       signinCallback(user);
//     } else {
//       // ログアウトされたとき
//       console.log('=== SIGNOUT');
//       signoutCallback();
//     }
//   });
// };

// export default ({ app }) => { // any は Context という型だけど今回は割愛
//   const signinCallback = () => {
//     console.log('=== Signin');
//   };

//   const signoutCallback = () => {
//     console.log('=== Signout');
//     app.router.replace('/top');
//   };

//   registerFirebaseAuthStateObserver(signinCallback, signoutCallback);
// };

// export function getCurrentUser() {
//   return new Promise((resolve) => {
//     const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
//       console.log(user)
//       resolve(user);
//       unsubscribe();
//     });
//   });
// }

export {
 firebase
}