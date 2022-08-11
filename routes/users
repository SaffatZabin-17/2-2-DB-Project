const express = require('express');
const bcrypt = require('bcrypt');
const user = require('../models/user');
const router = express.Router({ mergeParams: true })


router.get('/signup', async (req, res) => {
    res.render('signup', { message: 'Enter Credentials' })
})




//user makes post request to register him into db
router.post('/signup', async (req, res) => {
    const { type, full_name, mail, password, re_password } = req.body;
    console.log(req.body)
    let userExists = (await user.getUserByUsername(full_name)).length !== 0;
    if (userExists) {
        console.log('In userExists')
        return res.render('signup', { message: 'User already exists' })
    }
    if (!full_name || !mail || !password) {
        console.log('Please provide all info')
        return res.render('signup', { message: 'Please provide all info' })
    }
    const newUserID =parseInt(await user.getMaxUserID()) + 1;
    console.log(newUserID)
    const know = await user.insertNewUser(newUserID, full_name , mail, password, '');
    //user.insertNewUser(111, 'abc', 'abc@gmail.com', 'abc123', '');
    res.redirect('/')
})

router.get('/signin', async (req, res) => {
    /*if (req.session.isAuth) {
        res.redirect('/');
    }*/
    res.render('signin', { message: 'Please provide info' })
})

router.post('/signin', async (req, res) => {
    const { mail, password } = req.body;
    console.log(req.body)
    const userEmail = await user.getEmailID(mail);
    const userPass = await user.getPasswordFromEmailID(mail);
    console.log(userEmail)
    const userExists = userEmail.length !== 0;
    if (!userExists) {
        return res.render('signin', { message: 'Error logging in' })
    }

    const passwordMatch = password.localeCompare(userPass)
    console.log(passwordMatch)
    if (passwordMatch!==0) {
        return res.render('signin', { message: 'Error logging in' })
    }
    //var session = req.session;
    //req.session.userid = req.body.username;
    //req.session.isAuth = true;
    res.redirect('/');
})


router.get('/signout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

module.exports = router
