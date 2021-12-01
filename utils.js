const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const randomGeneValue = () => random(0, 256);

module.exports = {
    random,
    randomGeneValue
}