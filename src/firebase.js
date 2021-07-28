import * as firebase from "firebase";
import "firebase/database";

let config = {
  apiKey: "AIzaSyCW_z8JAsfzuYCkTb6cUD6L9mzg0us2IPw",
  authDomain: "crud-app-b2f82.firebaseapp.com",
  databaseURL: "https://crud-app-b2f82-default-rtdb.firebaseio.com",
  projectId: "crud-app-b2f82",
  storageBucket: "crud-app-b2f82.appspot.com",
  messagingSenderId: "534655336376",
  appId: "1:534655336376:web:2afe912125b942567f594d",
  measurementId: "G-K7J7ZM3QG1"
};

firebase.initializeApp(config);

export default firebase.database();
