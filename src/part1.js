const Pixel = require('../modules/pixel');

const runProgram = () => {
    const basePixelA = new Pixel();
    const basePixelB = new Pixel();
    const pixels = [basePixelA, basePixelB];
    let i = 2;

    while (i < 100) {
        let newPixel
        if (i % 2 === 0) {
            newPixel = new Pixel(pixels[i - 1], pixels[i - 2])
        } else {
            newPixel = new Pixel(pixels[i - 2], pixels[i - 3])
        }
        pixels.push(newPixel);
        i++;
    }
    console.log('pixels', pixels);
}

runProgram();