import React, { useState } from "react";
import axios from "axios";
import "../index.css";

const AdminPanel = () => {
  const [student, setStudent] = useState({
    id: "",
    registrationNumber: "",
    roll: "",
    department: "",
    name: "",
    cgpa: "",
    gpa: "",
    nid: "",
    dateOfBirth: "",
    fatherName: "",
    motherName: "",
    major: "",
    session: "",
    passingYear: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(
      "http://localhost:7000/api/v1/students/createStudent",
      student
    );
    alert("Student added successfully!");
  };

  return (
    <div className="container">
      <h1>Admin Panel</h1>
      <form onSubmit={handleSubmit} className="form-container">
        {Object.keys(student).map((key) => (
          <input
            key={key}
            type="text"
            placeholder={key.replace(/([A-Z])/g, " $1").toUpperCase()}
            value={student[key]}
            onChange={(e) => setStudent({ ...student, [key]: e.target.value })}
            className="form-input"
          />
        ))}
        <button type="submit" className="button button-primary">
          Add Student
        </button>
      </form>
    </div>
  );
};

export default AdminPanel;
