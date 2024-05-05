
const shortid = require('shortid');
const URL = require('../models/url.models.js');


async function handleShortURLGenerator(req, res) {
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: "URl is required" });
    const shortId = shortid();

    await URL.create({
        shortID: shortId,
        redirectingURL: body.url,
        visitHistory: []
    })
    res.status(201).json({
        shortID: shortId,
        redirectingURL: body.url
    })
}


async function handleAnalytics(req, res) {
    const shortID = req.params.shortID;
    const result = await URL.findOne({ shortID })

    return res.json({

        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory,

    })
}




module.exports = { handleShortURLGenerator, handleAnalytics }  