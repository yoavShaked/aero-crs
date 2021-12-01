const {randomGeneValue, random} = require('../utils');
const IdGenerator = require('./idGenerator');
const idGenerator = new IdGenerator();

const getDefaultGeneValue = (value) => !isNaN(value) ? value : randomGeneValue();

const Pixel = function (pixelA, pixelB, r,g,b) {

    this.id = parseInt(idGenerator.getID());

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

module.exports = Pixel;