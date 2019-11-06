const express = require('express');
const router = express.Router();
const { displayUsers, createUser, getUser, updateUser} = require('../controllers/user');

router.get('/', displayUsers);
router.post('/', createUser);
router.get('/:id', getUser);
router.put('/:id', updateUser);

module.exports = router;