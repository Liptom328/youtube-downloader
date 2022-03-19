const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();
app.use(cors());
var URL = "no url"

app.listen(4000, () => {
    console.log('Server listening at port 4000');
});

app.get('/mp3', (req,res) => {
    URL = req.query.URL;
    res.header('Content-Disposition', 'attachment; filename="download.mp3"');
    if(ytdl.validateURL(URL)) {
        ytdl(URL, {
            format: 'mp3'
            }).pipe(res);
    } else {
        return console.log("Not valid URL!")
    }
});

app.get('/mp4', (req,res) => {
    URL = req.query.URL;
    res.header('Content-Disposition', 'attachment; filename="download.mp4"');
    if(ytdl.validateURL(URL)) {
        ytdl(URL, {
            format: 'mp4'
            }).pipe(res);
    } else {
        return console.log("Not valid URL!")
    }
});
    