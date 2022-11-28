import { Card } from "./Card";

export class Blackjack {
  private cards:Card[];
  private playerCards:Card[];
  private dealerCards:Card[];

  constructor(){
    this.cards = [];
    this.playerCards = [];
    this.dealerCards = [];
  }

  private generateCards(){
    // array with the 4 suits of the French-suited cards
    let suits:string[] = ["clubs", "diamonds","hearts", "spades"];
    // array with the 2 possible colors for the cards
    let colors = ["black", "red"];
    let cardColor:string;
    // array with the 13 ranks per suit
    let ranks:string[] = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    // array with the in-game numerical value per rank
    let ranksInGameValues:number[] = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
    for (let suitsIndex:number = 0; suitsIndex < suits.length; suitsIndex++){
    let inGameValueIndex:number = 0;
    if(suitsIndex === 0 || suitsIndex === 3){
      cardColor = colors[0];
    } else {
      cardColor= colors[1];
    }
      for (let ranksIndex:number = 0; ranksIndex < ranks.length; ranksIndex++){
        let card:Card = new Card(suits[suitsIndex],ranks[ranksIndex],cardColor,ranksInGameValues[inGameValueIndex]);
        this.cards.push(card);
        inGameValueIndex++;
      }
    }
  }
  private shuffleTheCards(){
    for (let i:number = 0; i < 100; i++){
      this.cards.sort(() =>  Math.random() - 0.5 );
    }
  }
  public play(){
    // the 52 cards are generated
    this.generateCards();
    // shuffle the cards several times
    this.shuffleTheCards();
  }
}