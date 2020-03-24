const express = require('express')
const router = express()
const controller = require('../controller/book.controller')
router.get('/', controller.index)

module.exports = router