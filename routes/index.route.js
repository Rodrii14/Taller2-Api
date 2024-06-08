const express = require('express');
const router = express.Router();
const familyRouter = require('./family.route');
const personRouter = require('./person.route');

router.use('/family', familyRouter);
router.use('/person', personRouter);

module.exports = router;