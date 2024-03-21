const shortid = require('shortid');
const URL = require('../models/url.js');


async function handleGenerateNewShortUrl(req, res) {
    const body = req.body;

    if (!body.url) return res.status(400).json({ error: 'Invalid url' });

    const shortId = shortid();

    await URL.create({
        shortid: shortId,
        redirectingurl: body.url,
        visithistory: [],
    });

    return res.json({ id: shortId });
}

async function handleanalytics(req, res) {
    const shortid = req.params.shortid;
    const result = await URL.findOne({ shortid });
    return res.json({ totalClicks: result.visithistory.length });

}

module.exports = {
    handleGenerateNewShortUrl,
    handleanalytics
};