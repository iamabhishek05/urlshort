
const express = require('express')

const route = express.Router();
const { handleShortURLGenerator } = require('../controllers/url.controllers.js')
const { handleAnalytics } = require('../controllers/url.controllers.js')



route.post('/', handleShortURLGenerator)
route.get('/analytics/shortID', handleAnalytics)


module.exports = route;  