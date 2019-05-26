import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

let config = {
  apiKey: "AIzaSyA06gJL9-G7hXz5zCj0UQ8bzOpcZ2xPNMU",
  authDomain: "demo.firebaseapp.com",
  projectId: "fir-a7ddb",
  databaseURL: "https://fir-a7ddb.firebaseio.com"
};
firebase.initializeApp(config);

const db = firebase.firestore();

export default db;
