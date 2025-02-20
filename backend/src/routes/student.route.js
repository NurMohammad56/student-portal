import { Router } from "express";

import {
  createStudentData,
  getStudentData,
} from "../controllers/student.controller.js";

const router = Router();

// Create
router.route("/createStudent").post(createStudentData);

// Read
router.route("/getStudent").get(getStudentData);

export default router;
