const {random} = require('../utils');

const IdGeneratorSingleton = function(index = 0, initialID = 100000) {
    if(typeof IdGeneratorSingleton.instance === 'object') {
        return IdGeneratorSingleton.instance; 
    }

    IdGeneratorSingleton.instance = this;
    let _index = index;
    const _initialID = initialID;
    this.getNewId = function() {
        return `${_initialID + _index++}${random(0,10)}`;
    }
}

module.exports = IdGeneratorSingleton;