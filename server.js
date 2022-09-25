import express from 'express'
import mongoose from 'mongoose';
import Videos from './dbModel.js';
import Cors from 'cors';
//App Config
const app = express();
app.use(express.json())
app.use(Cors())
const port = process.env.PORT || 9000;
//Middleware
//DB Config
const url = "mongodb+srv://prash:28082002@prashu.puwtpp1.mongodb.net/Prash?retryWrites=true&w=majority";
mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    //API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello TheWebDev"));
app.post('/v2/posts', (req, res) => {
    const dbVideos = req.body
    console.log(dbVideos)
    Videos.create(dbVideos, (err, data) => {
        if (err) {
            console.log(err)
            res.status(500).send(err)
        } else
            res.status(201).send(data)
    })
})
app.get('/v2/posts', (req, res) => {
        Videos.find((err, data) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.status(200).send(data)
            }
        })
    })
    //Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`))