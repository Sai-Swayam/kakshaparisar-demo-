const User = require('../models/user')
const { hashPassword, comparePassword } = require('../helpers/auth')
const jwt = require('jsonwebtoken')

// testing get, post etc
const test = (req, res) => {
    res.json('test is working')
}

// register a user
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name)
            return res.json(
                { error: 'name is required' }
            )
        if (!password || password.length < 3)
            return res.json(
                { error: 'password is required and should be atleast 3 charcters long' }
            )
        const exist = await User.findOne({ email })
        if (exist) {
            return res.json({
                error: 'Email already exists'
            })
        }

        const hashedPassword = await hashPassword(password)

        // creating user object from User schema
        const user = await User.create({ name, email, password: hashedPassword })
        return res.json(user)

    } catch (error) {
        console.log(error);
    }
}

// login a user
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({
                error: 'No user found, invalid email'
            })
        }

        const match = await comparePassword(password, user.password)
        if (match) {
            jwt.sign({ email: user.email, id: user._id, name: user.name, notes: user.notes }, process.env.JWT_SECRET, {}, (err, token) => {
                if (err) {
                    throw err;
                }
                res.cookie('token', token).json(user);
            })
            // res.json('Password Matched')
        }
        if (!match) {
            res.json({
                error: 'Passwords do not match'
            })
        }
    } catch (error) {
        console.log(error);
    }
}

// get profile of current user
const getProfile = (req, res) => {
    const { token } = req.cookies
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
            if (err) {
                throw err;
            }
            // console.log(user);
            res.json(user);
        })
    }
    else {
        res.json(null);
    }
}

const addTaskUser = async (req, res) => {
    const { email, task } = await req.body;
    try {
        const user = await User.findOneAndUpdate({ email: email }, {
            $push: { notes: task }
        });
        res.status(200).json({ message: "task added" });
        return task;
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

const removeTaskUser = async (req, res) => {
    const { email, inf } = await req.body;
    try {
        const user = await User.findOneAndUpdate({ email: email },
            { $pull: { notes: { info: inf } } },
            { new: true });
        res.status(200).json({ message: "task removed" })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

module.exports = { test, registerUser, loginUser, getProfile, addTaskUser, removeTaskUser }