const AnagramFinder = function (word) {
    this.word = word.split('').sort().join('').toLowerCase()
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    // for word in other wordsList. if word.sorted == this.word.sorted
    return otherWords.filter(word => word.split('').sort().join('').toLowerCase() === this.word)
}

module.exports = AnagramFinder;
