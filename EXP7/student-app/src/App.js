import React from "react";
import Student from "./Student";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Student Information</h1>

      <Student
        name="Rahul Sharma"
        course="BCA"
        marks="85"
      />

      <Student
        name="Priya Singh"
        course="MCA"
        marks="92"
      />

      <Student
        name="Amit Verma"
        course="B.Tech"
        marks="78"
      />
    </div>
  );
}

export default App;
