import { Card } from "./Card";

export class Blackjack {
  private card:Card;

  constructor(){
    
  }

  public generateCards(){
    let cards:Card[] = [];
    // array with the 4 suits of the French-suited cards
    let suits:string[] = ["clubs", "diamonds","hearts", "spades"];
    // array with the 13 ranks per suit
    let ranks:string[] = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    // array with the in-game numerical value per rank
    let ranksInGameValues:number[] = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
    let inGameValueIndex:number = 0;
    for (let suitsIndex:number = 0; suitsIndex < suits.length; suitsIndex++){
      for (let ranksIndex:number = 0; ranksIndex < ranks.length; ranksIndex++){
        let card:Card = new Card(suits[suitsIndex],ranks[ranksIndex],ranksInGameValues[inGameValueIndex]);
        cards.push(card);
        console.log(card);
        inGameValueIndex++;
      }
    }
  }
  public play(){
    // the cards are generated
    this.generateCards();
  }
}