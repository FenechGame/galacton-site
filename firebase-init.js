import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBM1m6iYy8jQy1rudAyDKQyMwh5DblMjAw",
  authDomain: "xox-game-32a4c.firebaseapp.com",
  databaseURL: "https://xox-game-32a4c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "xox-game-32a4c",
  storageBucket: "xox-game-32a4c.firebasestorage.app",
  messagingSenderId: "599895312388",
  appId: "1:599895312388:web:7862f04e6fb937d192cd51",
  measurementId: "G-J4HKL6XB0K"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);