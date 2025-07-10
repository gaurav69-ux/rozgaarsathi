const router = require('express').Router();
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');




router.post('/login', (req, res) => {
    res.send('Login successful');
});

router.post('/signup', signupValidation, signup)

module.exports = router;