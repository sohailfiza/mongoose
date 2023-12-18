import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema(
  {
    subjectID: {
      type: String,
      required: true,
    },
    subjectName: {
      type: String,
      required: true,
    },
    Instructors: {
      type: [String],
      required: true,
    },
    Type: {
      type: String,
      required: true,
    },
    Credit: {
      type: Number,
      required: true,
    },
    Class: {
      type: [String],
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

export const SUBJECT = mongoose.model('SUBJECT', subjectSchema, 'subjectCollection');
