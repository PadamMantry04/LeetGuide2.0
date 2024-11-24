const express = require('express')
const router = express.Router();

// all routes shall be assigned indiv. folder, to keep shit organized

router.use('/user',require('./user'));

// router.use('/<endpoints grp>', require('<filepath>'))
module.exports = router;

