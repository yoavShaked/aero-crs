const fs = require('fs');
const express = require('express');
const {generatePixel} = require('./modules/pixel');
const IdGeneratorSingleton = require('./modules/IdGeneratorSingleton');
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
    router.post('/pixel', (_, response) => {
           fs.readFile(PIXEL_JSON_FILE_PATH, (err, data) => {
            if (err) {
                response
                    .status(500)
                    .send(`Error: ${err}`);
            } else {
                const jsonData = JSON.parse(data);
                // const newPixel = generatePixel(jsonData);
                const id = new IdGeneratorSingleton();
                
                const newPixel = generatePixel(jsonData);
                jsonData.push(newPixel);
                fs.writeFile(PIXEL_JSON_FILE_PATH, JSON.stringify(jsonData), (err) => {
                    if (err) {
                        console.log('err', err);
                        response
                            .status(500)
                            .send(`Error: ${err}`);
                    } else {
                        console.log('new pixel appended');
                        response
                            .status(200)
                            .send(newPixel);
                    }
                })
            }
        })
    });

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(router);
    app.listen(process.env.PORT || 8081, () => console.log(`Listening on port ${process.env.PORT || 8081}!`));
}

runProgram();