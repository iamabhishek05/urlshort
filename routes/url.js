const express = require('express');


const router = express.Router();

const { handleGenerateNewShortUrl } = require('../controllers/url.js')
const { handleanalytics } = require('../controllers/url.js')

router.post('/', handleGenerateNewShortUrl)

router.get('/analytics/:shortid', handleanalytics)

module.exports = router;      