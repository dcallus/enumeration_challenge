const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase;
}

PangramFinder.prototype.isPangram = function () {
  let lowerPhrase = this.phrase.toLowerCase()
  // for every 'letter' =make sure> lowerPhrase includes that letter
  return this.alphabet.every(letter => lowerPhrase.includes(letter));
}

module.exports = PangramFinder;
