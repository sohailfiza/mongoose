import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  CourseID: {
    type: String,
    required: true,
    unique: true
  },
  courseName: {
    type: String,
    required: true,
  },
  totalSemesters: {
    type: Number,
    required: true,
  },
  totalFees: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true,
});

export const COURSE = mongoose.model('COURSE', courseSchema, 'courseCollection');
