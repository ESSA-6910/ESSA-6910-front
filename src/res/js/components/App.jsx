import React from "react";
import "../../css/App.css";
import AddStudent from "./AddStudent/AddStudent";
import StudentList from "./StudentList/StudentList";

function App() {
  return (
    <div className="App">
      <StudentList />
      <AddStudent />
    </div>
  );
}

export default App;
