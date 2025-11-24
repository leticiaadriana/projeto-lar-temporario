const express = require('express');
const router = express.Router();
const controller = require('../controllers/cat.controller');
const auth = require('../middlewares/auth.middleware');
const upload = require('../middlewares/upload.middleware');

router.get('/', controller.list);
router.get('/:id', controller.detail);
router.post('/', auth, controller.create);
router.put('/:id', auth, controller.update);
router.delete('/:id', auth, controller.remove);
router.post('/:id/photo', auth, upload.single('file'), controller.uploadPhoto);

module.exports = router;
