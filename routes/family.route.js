const express = require('express');
const router = express.Router();
const familyController = require('../controllers/family.controllers');

router.post('/', familyController.create);

module.exports = router;