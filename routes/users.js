const express = require('express');
const bcrypt = require('bcrypt');
const user = require('../models/user');
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

module.exports = router
