var express = require('express');
const user = require('../models/user');
const student = require('../models/students');
const instructor = require('../models/instructors');
const courses = require('../models/course');
const router = express.Router({ mergeParams: true })

/* GET home page. */
router.get('/', function(req, res, next) {

  const course_repo = await courses.getAllCourses();
    console.log(course_repo);

    const instructor_repo = await instructor.getAllInstructor();
    console.log(instructor_repo);

  res.render('index', { title: 'Express' });

  res.render('index', {
            pageTitle: 'Home',
            path: '/index',
            isStudent: 'false',
            logged_in: 'false',
            courses: course_repo.data,
            teachers: instructor_repo.data
        })
});

module.exports = router;
