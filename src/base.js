import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDVs7Mk_3QrIEFmj6Hj8PcAqV2UYsyYV-M",
  authDomain: "catch-of-the-day-filip-1e3f9.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-filip-1e3f9.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;