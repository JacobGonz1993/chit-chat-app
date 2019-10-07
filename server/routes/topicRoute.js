const express = require("express");
const router = express.Router();
const {list} = require('../controllers/topicControllers');

router.get('/', list)
// router.get('/:id', show)
// router.post('/', create)

module.exports = router;