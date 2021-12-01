const {random} = require('../utils');

const IdGeneratorSingleton = function(index = 0, initialID = 100000) {
    if(typeof IdGeneratorSingleton.instance === 'object') {
        return IdGeneratorSingleton.instance; 
    }
    
    IdGeneratorSingleton.instance = this;
    this.index = index;
    this.initialID = initialID;
    this.getID = function() {
        return `${this.initialID + this.index++}${random(0,10)}`;
    }
}

module.exports = IdGeneratorSingleton;