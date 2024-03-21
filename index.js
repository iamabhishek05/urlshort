const express = require('express');
const urlRoutes = require('./routes/url.js');

const URL = require('./models/url');

const mongoose = require('mongoose');

const app = express();

const PORT = 8001;



const CONNECTION_URL = 'mongodb+srv://canttell:canttell@cluster0.bqkv7pk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';


app.use(express.json());


app.use('/url', urlRoutes);

app.get('/:shortid', async (req, res) => {

    const shortid = req.params.shortid;
    const entry = await URL.findOneAndUpdate({
        shortid
    }, {
        $push: {
            visithistory: {
                timestamps: Date.now()
            }
        }
    })

    res.redirect(entry.redirectingurl);




})






mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error.message);
    });

