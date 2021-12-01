const fs = require('fs');
const express = require('express');
const Pixel = require('../modules/pixel');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");

const PIXEL_JSON_FILE_PATH = './pixel.json';

const clearFile = (path) => {
    fs
        .writeFile(path, '[]', function () {
            console.log('File is clear')
        })
};

const runProgram = () => {
    clearFile(PIXEL_JSON_FILE_PATH);
    router.post('/pixel', (request, response) => {
        const {r, g, b} = request.body;
        const newPixel = new Pixel(null, null, r, g, b);

        fs.readFile(PIXEL_JSON_FILE_PATH, (err, data) => {
            if (err) {
                return response
                    .status(500)
                    .send(`Error: ${err}`);
            } else {
                const jsonData = JSON.parse(data);
                jsonData.push(newPixel);
                fs.writeFile(PIXEL_JSON_FILE_PATH, JSON.stringify(jsonData), (err) => {
                    if (err) {
                        console.log('err', err);
                        return response
                            .status(500)
                            .send(`Error: ${err}`);
                    } else {
                        console.log('new pixel appended');
                        return response
                            .status(200)
                            .send(`Pixel Created!`);
                    }
                })
            }
        })
    });
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(router);
    app.listen(process.env.PORT || 8088, () => console.log(`Listening on port ${process.env.PORT || 8088}!`));
}

runProgram();