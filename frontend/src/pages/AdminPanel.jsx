import React, { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";

const AdminPanel = () => {
  const [students, setStudents] = useState([]); // সব স্টুডেন্ট ডাটা স্টোর করার জন্য
  const [editStudent, setEditStudent] = useState(null); // এডিট করার জন্য স্টুডেন্ট ডাটা
  const [formData, setFormData] = useState({
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

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:7000/api/v1/students/getAllStudents"
      );
      setStudents(response.data); // ডাটা সেট করুন
    } catch (error) {
      console.error("Error fetching students:", error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:7000/api/v1/students/createStudent",
        formData
      );
      alert("Student added successfully!");
      setFormData({
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
      fetchStudents();
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  const handleEdit = (student) => {
    setEditStudent(student);
    setFormData(student);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:7000/api/v1/students/updateStudent/${editStudent.id}`,
        formData
      );
      alert("Student updated successfully!");
      setEditStudent(null);
      setFormData({
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
      fetchStudents();
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  const handleDelete = async (id) => {
    if (!id) {
      alert("Invalid student ID!");
      return;
    }

    try {
      const response = await axios.delete(
        `http://localhost:7000/api/v1/students/deleteStudent/${id}`
      );

      alert(response.data.message);
      fetchStudents();
    } catch (error) {
      console.error(
        "Error deleting student:",
        error.response?.data?.message || error.message
      );
      alert(
        "Failed to delete student! " +
          (error.response?.data?.message || error.message)
      );
    }
  };

  return (
    <div className="container">
      <h1>Admin Panel</h1>
      <form
        onSubmit={editStudent ? handleUpdate : handleSubmit}
        className="form-container"
      >
        {Object.keys(formData).map((key) => (
          <input
            key={key}
            type="text"
            name={key}
            placeholder={key.replace(/([A-Z])/g, " $1").toUpperCase()}
            value={formData[key]}
            onChange={handleInputChange}
            className="form-input"
          />
        ))}
        <button type="submit" className="button button-primary">
          {editStudent ? "Update Student" : "Add Student"}
        </button>
        {editStudent && (
          <button
            type="button"
            className="button button-secondary"
            onClick={() => setEditStudent(null)}
          >
            Cancel Edit
          </button>
        )}
      </form>

      <div className="student-list">
        <h2>Student List</h2>
        {students.length > 0 ? (
          students.map((student) => (
            <div key={student._id} className="student-item">
              <p>Name: {student.name}</p>
              <p>ID: {student.id}</p>
              <p>CGPA: {student.cgpa}</p>
              <p>Department: {student.department}</p>
              <button
                className="button button-edit"
                onClick={() => handleEdit(student)}
              >
                Edit
              </button>
              <button
                className="button button-delete"
                onClick={() => handleDelete(student._id)}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No students found</p>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
