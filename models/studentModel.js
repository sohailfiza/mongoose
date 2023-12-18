import mongoose from "mongoose";

const studentSchema = mongoose.Schema(
  {
    studentID: {
      type: String,
      required: true,
    },
    studentName: {
      type: String,
      required: true,
    },
    Subjects: {
      type: [String],
      required: true,
    },
    Semester: {
      type: Number,
      required: true
    },
    totalCredit: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true,
  }
)
export const STUDENT = mongoose.model('STUDENT', studentSchema, 'studentCollection')
