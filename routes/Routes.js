import express from 'express';
import { COURSE } from '../models/courseModel.js';
import { STUDENT } from '../models/studentModel.js';
import { SUBJECT } from '../models/subjectModel.js';

const router = express.Router();

// Routes for Courses
router.post('/courses', async (request, response) => {
  try {
    const addCourse = {
      CourseID: request.body.CourseID,
      courseName: request.body.courseName,
      totalSemesters: request.body.totalSemesters,
      totalFees: request.body.totalFees
    };

    const Course = await COURSE.create(addCourse);
    return response.status(201).send(Course);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.get('/courses', async (request, response) => {
  try {
    const courses = await COURSE.find();
    console.log(courses);
    return response.status(200).json({
      count: courses.length,
      data: courses,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});


// Routes for Subjects
router.post('/subjects', async (request, response) => {
  try {
    const addSubject = {
      subjectID: request.body.subjectID,
      subjectName: request.body.subjectName,
      Instructors: request.body.Instructors,
      Type: request.body.Type,
      Credit: request.body.Credit,
      Class: request.body.Class
    };
    const Subject = await SUBJECT.create(addSubject);
    return response.status(201).send(Subject);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.get('/subjects', async (request, response) => {
  try {
    const subjects = await SUBJECT.find();
    console.log(subjects);
    return response.status(200).json({
      count: subjects.length,
      data: subjects,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Routes for Students
router.post('/students', async (request, response) => {
  try {
    const addStudent = {
      studentID: request.body.studentID,
      studentName: request.body.studentName,
      Subjects: request.body.Subjects,
      Semester: request.body.Semester,
      totalCredit: request.body.totalCredit
    };
    const Student = await STUDENT.create(addStudent);
    return response.status(201).send(Student);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.get('/students', async (request, response) => {
  try {
    const students = await STUDENT.find();
    console.log(students);
    return response.status(200).json({
      count: students.length,
      data: students,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;