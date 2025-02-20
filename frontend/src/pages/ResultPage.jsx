import React, { useState } from "react";
import axios from "axios";
import "../index.css";

const ResultPage = () => {
  const [student, setStudent] = useState(null);
  const [message, setMessage] = useState("");
  const [search, setSearch] = useState({
    id: "",
    registrationNumber: "",
    roll: "",
    department: "",
  });

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        "http://localhost:7000/api/v1/students/getStudent",
        {
          params: search,
        }
      );

      if (response.data) {
        setStudent(response.data);
        setMessage("Student data found successfully!");
      } else {
        setStudent(null);
        setMessage("No student found!");
      }
    } catch (error) {
      setStudent(null);
      setMessage("An error occurred while fetching data.");
    }
  };

  return (
    <div className="container">
      <h1>Search Result</h1>
      <div className="form-container">
        <input
          type="text"
          placeholder="ID"
          value={search.id}
          onChange={(e) => setSearch({ ...search, id: e.target.value })}
          className="form-input"
        />
        <input
          type="text"
          placeholder="Registration Number"
          value={search.registrationNumber}
          onChange={(e) =>
            setSearch({ ...search, registrationNumber: e.target.value })
          }
          className="form-input"
        />
        <input
          type="text"
          placeholder="Roll"
          value={search.roll}
          onChange={(e) => setSearch({ ...search, roll: e.target.value })}
          className="form-input"
        />
        <input
          type="text"
          placeholder="Department"
          value={search.department}
          onChange={(e) => setSearch({ ...search, department: e.target.value })}
          className="form-input"
        />
        <button onClick={handleSearch} className="button button-secondary">
          Search
        </button>
      </div>
      {message && <p className="message">{message}</p>}
      {student && (
        <div className="result-container">
          <h2>Student Details</h2>
          {Object.keys(student)
            .filter(
              (key) =>
                key !== "_id" && key !== "createdAt" && key !== "updatedAt"
            )
            .map((key) => (
              <div key={key} className="result-item">
                <strong>{key.replace(/([A-Z])/g, " $1").toUpperCase()}</strong>
                <span>{student[key]}</span>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default ResultPage;
