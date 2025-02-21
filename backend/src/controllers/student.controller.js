import { Student } from "../models/student.models.js";

// Upload student data to the database
const createStudentData = async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).send(student);
  } catch (error) {
    res
      .status(400)
      .send({ message: "Student create failed", error: error.message });
  }
};

// Get all students
const getStudentsData = async (req, res) => {
  try {
    const students = await Student.find({});
    res.status(200).send(students);
  } catch (error) {
    res.status(400).send({
      message: "Problem while getting the data",
      error: error.message,
    });
  }
};

// get students by details data the database
const getStudentDataByDetails = async (req, res) => {
  try {
    const { id, registrationNumber, roll, department } = req.query;

    const student = await Student.findOne({
      id,
      registrationNumber,
      roll,
      department,
    });

    res.status(200).send(student);
  } catch (error) {
    res.status(400).send("Problem while getting the data", error.message);
  }
};

// Update students
const updateStudentData = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const student = await Student.findOneAndUpdate({ id: id }, updatedData, {
      new: true,
    });

    if (student) {
      res.status(200).send(student);
    } else {
      res.status(404).send("Student not found");
    }
  } catch (error) {
    res.status(400).send({
      message: "Problem while updating the data",
      error: error.message,
    });
  }
};

// Delete students
const deleteStudentData = async (req, res) => {
  try {
    const { id } = req.params;

    const student = await Student.findByIdAndDelete(id);

    if (student) {
      res.status(200).send({ message: "Student deleted successfully" });
    } else {
      res.status(404).send({ message: "Student not found" });
    }
  } catch (error) {
    res.status(500).send({
      message: "Problem while deleting the data",
      error: error.message,
    });
  }
};

export {
  createStudentData,
  getStudentDataByDetails,
  updateStudentData,
  deleteStudentData,
  getStudentsData,
};
