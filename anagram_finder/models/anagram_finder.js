const AnagramFinder = function (word) {
    this.word = word;
    this.sortedWord = word.toLowerCase().split('').sort().join('');
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    // for word in other wordsList. if word.sorted == this.word.sorted
    return otherWords.filter(word => word.toLowerCase().split('').sort().join('') === this.sortedWord && word !== this.word);
}

module.exports = AnagramFinder;
