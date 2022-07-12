import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// https://api.themoviedb.org/3/movie/550?api_key=96e3938f8457d706d36c13baab28ea49
// 96e3938f8457d706d36c13baab28ea49

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDbRd_6Dun2ZbmmM-BDhyxo1gkWWrUIBxM",
//   authDomain: "netflicclone-64578.firebaseapp.com",
//   projectId: "netflicclone-64578",
//   storageBucket: "netflicclone-64578.appspot.com",
//   messagingSenderId: "63716837505",
//   appId: "1:63716837505:web:29611bd8c0ae277c6ba580"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);