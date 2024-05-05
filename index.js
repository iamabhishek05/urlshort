
const express = require('express')
const URLroute = require('./routes/url.routes.js')
const URL = require('./models/url.models.js')
const connectDb = require('./db/connect.js')
const dotenv = require('dotenv').config();






connectDb();

const app = express();



const PORT = 3000

app.use(express.json())

app.use(express.urlencoded({ extended: true }))
app.use('/url', URLroute)




// shortID is a dynamic route and is treated as a variable
app.get('/:shortID', async (req, res) => {

    // shortID requested
    const shortID = req.params.shortID;

    const result = await URL.findOneAndUpdate({

        // what you have to find ( shortID)
        shortID

    }, {
        // what you have to update
        visitHistory: { $push: { timestamps: Date.now() } }
    })

    res.redirect(result.redirectingURL)

})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
}) 