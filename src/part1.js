const {generatePixel} = require('./modules/pixel');

const runProgram = () => {
    const pixels = [];
    let i = 2;

    while (i < 100) {
        pixels.push(generatePixel(pixels));
        i++;
    }
    console.log('pixels', pixels);
}

runProgram();