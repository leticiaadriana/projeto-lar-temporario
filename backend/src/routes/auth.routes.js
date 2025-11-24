const express = require('express');
const router = express.Router();
const controller = require('../controllers/auth.controller');

router.post('/login', controller.login);
router.post('/reset-initial-password', controller.resetInitialPassword);
module.exports = router;
