var express = require('express');
const user = require('../models/user');
const student = require('../models/students');
const instructor = require('../models/instructors');
const router = express.Router({ mergeParams: true })

/* GET home page. */
router.get('/', function(req, res, next) {
   res.render('home/index.ejs', {
      pageTitle: 'Home',
      path: '/',
      isStudent: 'false',
      logged_in: 'false',
      categories: [],
      courses: [],
      teachers: []
   });
});


module.exports = router;
