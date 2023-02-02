import React, { useState } from 'react';
import './App.css';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function InputForm() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted value:", inputValue);
  };

  return (
    <div className="input-container">
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default InputForm;
  