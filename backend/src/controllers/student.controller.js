import { Student } from "../models/student.models.js";

// Upload student data to the database
const createStudentData = async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.send(student);
  } catch (error) {
    res.status(400).send("Student create failed", error.message);
  }
};

// get students data the database
const getStudentData = async (req, res) => {
  try {
    const { id, registrationNumber, roll, department } = req.query;

    const student = await Student.findOne({
      id,
      registrationNumber,
      roll,
      department,
    });

    res.send(student);
  } catch (error) {
    res.status(400).send("Problem while getting the data", error.message);
  }
};
export { createStudentData, getStudentData };
