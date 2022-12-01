import { Card } from "./Card";
import { ICasinoGame } from "./ICasinoGame";
import { ReadlineSync } from "./ReadlineSync";

export class Blackjack extends ReadlineSync implements ICasinoGame{
  private bet:number;
  private cardDeck:Card[];
  private discardDeck:Card[];
  private playerCards:Card[];
  private dealerCards:Card[];

  constructor(){
    super();
    this.bet = 0;
    this.cardDeck = [];
    this.discardDeck = [];
    this.playerCards = [];
    this.dealerCards = [];
  }
  public namePresentation(): void {
    // the name of the game is displayed
    console.log("\n"+"---> Blackjack <---");
  }
  private generateCards():void{
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
        this.cardDeck.push(card);
        inGameValueIndex++;
      }
    }
  }
  private shuffleTheCards():void{
    // the cards are shuffled several times
    for (let i:number = 0; i < 100; i++){
      this.cardDeck.sort(() =>  Math.random() - 0.5 );
    }
  }
  private hit(whoHasTheTurn:Card[]):void{
    console.log("\n"+"Card deck before: "+this.cardDeck.length+" cards"+"\n");
    console.log(this.cardDeck);
    // pick a card
    whoHasTheTurn.push(this.cardDeck[0]);
    this.cardDeck.shift();
    switch (whoHasTheTurn){
      case this.playerCards:
        console.log("\n"+"Player has "+whoHasTheTurn.length+" cards:"+"\n");
        break;
      case this.dealerCards:
        console.log("\n"+"Dealer has "+whoHasTheTurn.length+" cards:"+"\n");
        break;
    }
    console.log(whoHasTheTurn);
    console.log("\n"+"Card deck after hit: "+this.cardDeck.length+" cards"+"\n");
    console.log(this.cardDeck);
  }
  private stay(whoHasTheTurn:Card[]):void{
    // stay with your cards
    switch (whoHasTheTurn){
      case this.playerCards:
        console.log("\n"+"Player stays with his cards.");
        break;
      case this.dealerCards:
        console.log("\n"+"Dealer stays with his cards.");
        break;
    }
  }
  private showCards(whoHasTheTurn:Card[]):void{
    for (let i:number = 0; i < whoHasTheTurn.length; i++){
      console.log(whoHasTheTurn[i].toString());
    }
  }
  private checkCardsTotalValue(whoHasTheTurn:Card[]){
    let cardsTotalValue:number = 0;
    for (let i:number = 0; i < whoHasTheTurn.length; i++){
      cardsTotalValue += whoHasTheTurn[i].getInGameValue();
    }
    
  }
  public requestBet():void{
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
  public play():void{
    this.namePresentation();
    this.generateCards();
    this.shuffleTheCards();
    this.requestBet();
    // when the game starts both the player and the dealer
    // must receive the first two cards.
    // that means they must hit (pick a card) two times
    // before they start choosing whether or not to stay.
    this.hit(this.playerCards);
    this.showCards(this.playerCards);
    this.hit(this.dealerCards);
    console.log("\n"+"The dealer has taken 1 card but will show it on the next turn");
    this.hit(this.playerCards);
    this.showCards(this.playerCards);
    this.hit(this.dealerCards);
    console.log("\n"+"Dealer shows his first card:");
    console.log("\n"+this.dealerCards[0].toString());
    // bust se le dice cuando se pasan de 21
    // si empatan el jugador no genera ganancias pero mantiene el dinero apostado
  }
}