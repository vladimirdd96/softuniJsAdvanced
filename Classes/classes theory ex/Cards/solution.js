let result = (function () {
    let Suits = {
        SPADES: "♠",
        HEARTS: "♥",
        DIAMONDS: "♦",
        CLUBS: "♣"
    };
    let face = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }
        get face() {
            return this._face;
        }
        set face(value) {
            if (!face.includes(value)) {
                throw new Error('invalid face value');
            }
            this._face = value;
        }
        get suit() {
            return this._suit;
        }
        set suit(value) {
            if (!Object.keys(Suits).map(x => Suits[x]).includes(value)) {
                throw new Error('invalid suit value');
            }
            this._suit = value;
        }
    }
    return {
        Suits: Suits,
        Card: Card
    };
}());
let Card = result.Card;
let Suits = result.Suits;
let card = new Card('Q', Suits.CLUBS);
card.face = 'A';
card.suit = Suits.DIAMONDS;
console.log(card);
// let card2 = new Card('1', Suits.DIAMONDS)
