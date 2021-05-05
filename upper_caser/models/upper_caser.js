const UpperCaser = function (words) {
    this.words = words
}

UpperCaser.prototype.toUpperCase = function () {
    return result = this.words.map(word => word.toUpperCase());
}

module.exports = UpperCaser;
