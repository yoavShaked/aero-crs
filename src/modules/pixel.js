const {randomGeneValue, random} = require('../utils');
const IdGeneratorSingleton = require('./IdGeneratorSingleton');

const getDefaultGeneValue = (value) => !isNaN(value) ? value : randomGeneValue();

const Pixel = function (pixelA, pixelB, r,g,b) {

    this.id = parseInt((new IdGeneratorSingleton()).getID());

    if (pixelA && pixelB) {
        const {genes: genesA} = pixelA;
        const {genes: genesB} = pixelB;
        
        const rGenes = [genesA.r, genesB.r, randomGeneValue()];
        const gGenes = [genesA.g, genesB.g, randomGeneValue()];
        const bGenes = [genesA.b, genesB.b, randomGeneValue()];
        this.genes = {
         r: rGenes[random(0,3)],
         g: gGenes[random(0,3)],
         b: bGenes[random(0,3)]
        }
    } else {
        this.genes = {
            r: getDefaultGeneValue(r),
            g: getDefaultGeneValue(g),
            b: getDefaultGeneValue(b)
        };
    }
}

const generatePixel = (pixels = []) => {
    let newPixel
    if(pixels.length >= 2) {
        if (pixels.length % 2 === 0) {
            newPixel = new Pixel(pixels[pixels.length - 1], pixels[pixels.length - 2])
        } else {
            newPixel = new Pixel(pixels[pixels.length - 2], pixels[pixels.length - 3])
        }
    }
    else {
        newPixel = new Pixel();
    }

    return newPixel;    
}

module.exports = {generatePixel};