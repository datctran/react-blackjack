export const AceCard = 'Ace';

export enum FaceCards {
    'King',
    'Queen',
    'Jack',
}

export enum Suit {
    'Hearts',
    'Spade',
    'Diamond',
    'Clubs',
}

// export enum Suit {
//     'Hearts' = 'Hearts',
//     'Spade' = 'Spade',
//     'Diamond' = 'Diamond',
//     'Clubs' = 'Clubs',
// }

export type SuitType = { [Tkey in Suit]: Suit }

export interface Card {
    values: Number[];
    displayText: string;
    icon: any;
    suit: string;
}

