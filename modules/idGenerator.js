const {random} = require('../utils');

const IdGenerator = function(index = 0, initialID = 100000) {
    this.index = index;
    this.initialID = initialID;
    this.getID = function() {
        return `${this.initialID + this.index++}${random(0,10)}`;
    }
}

module.exports = IdGenerator;