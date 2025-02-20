import mongoose, { Schema } from "mongoose";

const studentSchema = new Schema(
  {
    id: String,
    registrationNumber: String,
    roll: String,
    department: String,
    name: String,
    cgpa: String,
    gpa: String,
    nid: String,
    dateOfBirth: String,
    fatherName: String,
    motherName: String,
    major: String,
    session: String,
    passingYear: String,
  },

  {
    timestamps: true,
    versionKey: false,
  }
);

export const Student = mongoose.model("Student", studentSchema);
