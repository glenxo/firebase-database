import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCNa-ggZ2_rErdJoEQGciZMBrgLCvyQnuI",
  authDomain: "lift-intl-fb2cd.firebaseapp.com",
  databaseURL: "https://lift-intl-fb2cd-default-rtdb.firebaseio.com",
  projectId: "lift-intl-fb2cd",
  storageBucket: "lift-intl-fb2cd.appspot.com",
  messagingSenderId: "996609355856",
  appId: "1:996609355856:web:ad55641b74bff24e69e155",
  measurementId: "G-Q2H3QS0SBY"
};
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const ref = database.ref('/');

function InputForm() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    ref.push({ inputValue });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default InputForm;
