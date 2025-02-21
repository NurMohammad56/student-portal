import { Router } from "express";

import {
  createStudentData,
  getStudentDataByDetails,
  updateStudentData,
  deleteStudentData,
  getStudentsData,
} from "../controllers/student.controller.js";

const router = Router();

// Create
router.route("/createStudent").post(createStudentData);
// Get all students
router.route("/getAllStudents").get(getStudentsData);
// get students by details
router.route("/getStudentByDetails").get(getStudentDataByDetails);

// Update
router.route("/updateStudent/:id").put(updateStudentData);

// Delete
router.route("/deleteStudent/:id").delete(deleteStudentData);

export default router;
