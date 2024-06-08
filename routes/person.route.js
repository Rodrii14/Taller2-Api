const express = require('express');
const router = express.Router();
const personController = require('../controllers/person.controllers');

router.post('/', personController.create);

module.exports = router;