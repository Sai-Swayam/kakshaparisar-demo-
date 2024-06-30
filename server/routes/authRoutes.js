const express = require('express')
const router = express.Router()
const cors = require('cors')
const { test, registerUser, loginUser, getProfile, postUser } = require('../controller/authController')

// middleware

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    }))

router.get('/', test)
router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/profile', getProfile)
// router.post('/profile',postUser)
module.exports = router;