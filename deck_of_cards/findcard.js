/*
index all cards 1-52
map given cards to indexes
find the disjoint set
*/

// Set difference
Set.prototype.diff = function (setB) {
  const diff = new Set(this);

  for (const elem of setB) {
    diff.delete(elem);
  }

  return diff;
}

// Map card objects to integers 1-52
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

// Map integers back to card objects
function mapToCards (integers) {
  let result = [];

  const numToSuit = {
    '0': 'spades',
    '1': 'clubs',
    '2': 'diamonds',
    '3': 'hearts'
  };

  const numToValue = {
    '1': 'ace',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
    '10': 'ten',
    '11': 'jack',
    '12': 'queen',
    '13': 'king'
  };

  for (const integer of integers)  {
    const suitNum  = integer / 13 === Math.floor(integer / 13) ? Math.floor(integer / 13) - 1 : Math.floor(integer / 13),
          valueNum = integer % 13 === 0 ? 13 : integer % 13;

    result.push({
      suit: numToSuit[suitNum.toString()],
      value: numToValue[valueNum.toString()]
    });
  }

  return result;
}

// Main function
// Will return an array of cards missing from a full deck
function findMissingCards (cards) {
  let fullDeck = [];

  for (let i = 1; i <= 52; i++) {
    fullDeck.push(i);
  }

  const cardsSet    = new Set(mapToIndex(cards)),
        fullDeckSet = new Set(fullDeck);

  return mapToCards([...fullDeckSet.diff(cardsSet)]);
}

// Test function
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

console.log('The missing cards are:');
console.log(findMissingCards(cards));
