const express = require('express');
const router = express.Router();
const { displayRequest, createRequest, getRequest, updateRequest} = require('../controllers/check_request');

router.get('/', displayRequest);
router.post('/', createRequest);
router.get('/:id', getRequest);
router.put('/:id', updateRequest);

module.exports = router;