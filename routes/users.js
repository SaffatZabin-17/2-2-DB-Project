const express = require('express')
const bcrypt = require('bcrypt')
const user = require('../models/user');
const student = require('../models/students');
const instructor = require('../models/instructors');
const router = express.Router({ mergeParams: true })


router.get('/signup', async (req, res) => {
    res.render('signup', { message: 'Enter Credentials' })
})




//user makes post request to register him into db
router.post('/signup', async (req, res) => {
    const { username, email, password, re_password } = req.body;

    let userExists = (await user.getUserByUsername(username)).length == 0 ? false : true;

    if (userExists) {
        return res.render('signup', { message: 'User already exists' })
    }
    if (!username || !email || !password) {
        return res.render('signup', { message: 'Please provide all info' })
    }

    //if new user
    const hashpassword = await bcrypt.hash(password, 4);
    //insert user into db with hashed password
    await user.insertNewUser(username, email, hashpassword);
    res.redirect('/')
})


router.get('/signin', async (req, res) => {
    /*if (req.session.isAuth) {
        res.redirect('/');
    }*/
    res.render('signin', { message: 'Please provide info' })
})



router.post('/signin', async (req, res) => {
    const { username, password } = req.body;
    const users = await user.getUserByUsername(username);
    const userExists = users.length == 0 ? false : true;
    if (!userExists) {
        return res.render('signin', { message: 'Error logging in' })
    }

    const passwordMatch = await bcrypt.compare(password, users[0].PASSWORD)
    if (!passwordMatch) {
        return res.render('signin', { message: 'Error logging in' })
    }
    //var session = req.session;
    req.session.userid = req.body.username;
    //req.session.isAuth = true;
    res.redirect('/');
})


router.get('/signout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

module.exports = router
