const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.get('/forward_video_feed', async (req, res) => {
    try {
        // Fetch the video stream from Flask
        const response = await axios({
            url: 'http://localhost:5000/video_feed',
            method: 'GET',
            responseType: 'stream'
        });

        // Pipe the video stream to the response
        res.setHeader('Content-Type', 'multipart/x-mixed-replace; boundary=frame');
        response.data.pipe(res);
    } catch (error) {
        console.error('Error fetching video feed:', error);
        res.status(500).send('Error fetching video feed');
    }
});

app.listen(PORT, () => {
    console.log(`Node.js server listening on port ${PORT}`);
});
