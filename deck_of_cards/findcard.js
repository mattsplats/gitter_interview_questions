/*
index all cards 1-52
map given cards to indexes
find the disjoint set
*/

Set.prototype.diff = function (setB) {
  const diff = new Set(this);

  for (const elem of setB) {
    diff.delete(elem);
  }

  return diff;
}

function mapToIndex (cards) {
  let result = [];

  const suitToNum = {
    spades: 0,
    clubs: 13,
    diamonds: 26,
    hearts: 39
  };

  const valueToNum = {
    ace: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    jack: 11,
    queen: 12,
    king: 13
  };

  for (const card of cards)  {
    result.push(suitToNum[card.suit] + valueToNum[card.value]);
  }

  return result;
}

function findMissingCards (cards) {
  let fullDeck = [];

  for (let i = 1; i <= 52; i++) {
    fullDeck.push(i);
  }

  const cardsSet    = new Set(mapToIndex(cards)),
        fullDeckSet = new Set(fullDeck);

  return [...fullDeckSet.diff(cardsSet)];
}

const cards = [
  {
    suit: 'spades',
    value: 'ace'
  },
  {
    suit: 'spades',
    value: 'two'
  }
];

console.log(findMissingCards(cards));
