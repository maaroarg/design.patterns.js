/*
Design Pattern: Strategy
Design Principle: "Identify the aspects of your application that vary and separate them
from what stays the same." (cap1.p9)
Design Principle: "Program to an interface not an implementation." (cap1.p12)
Design Principle: "Favor composition over inheritance" (cap1.p23)
*/

//SimUDuck App
Class Duck() {
  constructor () {

  }
  swim(){
    console.log("Swim!");
  }
  display(){
    console.log("I'm a Duck");
  }
  performQuack(){
    this.QuackBehavior.quack();
  }
  performFlight(){
    this.FlightBehavior.flight();
  }
  setFlightBehavior(fb){
    this.FlightBehavior = fb;
  }
  setQuackBehavior(qb){
    this.QuackBehavior = qb;
  }
}

Class MallardDuck extends Duck {}
Class ReadHeadDuck extends Duck {}
Class RubberDuck extends Duck {}


//Algorithms Flight
Class FlightBehavior {
  constructor(){}
  flight(){}
}

Class FlightWithWings extends FlightBehavior {
  constructor(){
    super();
  }

  flight(){
    console.log("Flight with wings!");
  }
}
Class FlightNoWay extends FlightBehavior {
  constructor(){
    super();
  }

  flight(){
    console.log("Flight with NO wings! :( )");
  }
}

//Algorithms Quack
Class QuackBehavior {
  constructor(){}
  quack(){}
}

Class Quack extends QuackBehavior {
  constructor(){
    super();
  }

  quack(){
    console.log("Say Quack!");
  }
}

Class Squeak extends QuackBehavior {
  constructor(){
    super();
  }

  quack(){
    console.log("Say Squeak!");
  }
}

Class MuteQuack extends QuackBehavior {
  constructor(){
    super();
  }

  quack(){
    console.log("Say Nothing! :( )");
  }
}
