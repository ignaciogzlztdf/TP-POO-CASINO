import { Card } from "./Card";
import { ICasinoGame } from "./ICasinoGame";
import { ReadlineSync } from "./ReadlineSync";

export class Blackjack extends ReadlineSync implements ICasinoGame{
  private bet:number;
  private cards:Card[];
  private playerCards:Card[];
  private dealerCards:Card[];

  constructor(){
    super();
    this.bet = 0;
    this.cards = [];
    this.playerCards = [];
    this.dealerCards = [];
  }
  public namePresentation(): void {
    // the name of the game is displayed
    console.log("\n"+"---> Blackjack <---");
  }
  private generateCards(){
    /* the 52 cards are generated */

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
    // the cards are shuffled several times
    for (let i:number = 0; i < 100; i++){
      this.cards.sort(() =>  Math.random() - 0.5 );
    }
  }
  public requestBet(){
    // the bet is requested
    let bet:number = Number(this.rls.question("\n"+"Enter your bet: "));
    if (!Number.isInteger(bet)){
      console.log("\n"+"You are only allowed to bet integer amounts.");
      return this.requestBet();
    }
    if (bet <= 0 || bet > 10000){
      console.log("\n"+"This game topic only allows you to bet up to 10000 usd. Try again.")
      return this.requestBet();
    } else {
      this.bet = bet;
    }
  }
  public play(){
    this.namePresentation();
    this.generateCards();
    this.shuffleTheCards();
    this.requestBet();
  }
}