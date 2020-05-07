  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAdl8P-CIvnZGmpulcXFcQ3pH7xToREx-Q",
    authDomain: "recipe-site-4642f.firebaseapp.com",
    databaseURL: "https://recipe-site-4642f.firebaseio.com",
    projectId: "recipe-site-4642f",
    storageBucket: "recipe-site-4642f.appspot.com",
    messagingSenderId: "987208276892",
    appId: "1:987208276892:web:26d137f6f381ce17534659"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;