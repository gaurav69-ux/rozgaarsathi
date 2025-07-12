
const UserModel = require('../models/user');

const bcrypt = require('bcrypt');

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // Check if user already exists
        const user = await UserModel.findOne({ email});
        if (user) {
            return res.status(409)
            .json({ message: 'User already exists,you can login', success: false });
        }


    } catch (error) {
    }
}

// 27.07 on yt