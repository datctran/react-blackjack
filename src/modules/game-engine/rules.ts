import { AceCard, Card, FaceCards, Suit } from "./models/card.enum";

export class GameHelper {
    static generateDeck(): Card[] {
        const deck: Card[] = [];
        const getDisplayTest = (cardValue: string, suit: string) => `${cardValue} of ${suit}`;
        const getDigitCards = (suitValue: string): void => {
            for (let i = 2; i < 11; i++) {
                const card: Card = {
                    values: [i],
                    displayText: getDisplayTest(i.toString(), suitValue),
                    icon: i.toString(),
                    suit: suitValue,
                };
                deck.push(card);
            }
        };
        const getFaceCards = (suitValue: string): void => {
            for (const faceCardValue in Object.keys(FaceCards)) {
                if (typeof FaceCards[faceCardValue] !== "string") {
                    continue;
                }

                const card: Card = {
                    values: [10],
                    displayText: getDisplayTest(FaceCards[faceCardValue], suitValue),
                    icon: FaceCards[faceCardValue][0],
                    suit: suitValue,
                };
                deck.push(card);
            }
        };
        const getAceCard = (suitValue: string): void => {
            const card: Card = {
                values: [1, 11],
                displayText: getDisplayTest(AceCard, suitValue),
                icon: AceCard[0],
                suit: suitValue,
            };
            deck.push(card);
        };

        for (const suitValue in Object.keys(Suit)) {
            if (typeof Suit[suitValue] !== "string") {
                continue;
            }

            getDigitCards(Suit[suitValue]);
            getFaceCards(Suit[suitValue]);
            getAceCard(Suit[suitValue]);
        }

        return deck;
    }

    static shuffleDeck(deck: Card[]): Card[] {
        deck.forEach((_, index) => {
            const newIndex = Math.floor(Math.random() * deck.length);
            [deck[index], deck[newIndex]] = [deck[newIndex], deck[index]];
        });

        return deck;
    }
}