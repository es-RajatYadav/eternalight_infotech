const express = require('express');
const { registerUser, authUser, updateUserProfile} = require('../controllers/userController');
const router = express.Router();

router.route('/register').post(registerUser);
router.route('/login').post(authUser);
router.route('/update').post(updateUserProfile);
module.exports = router;