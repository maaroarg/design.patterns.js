/*
Design Pattern: Strategy.
Defines a family of algorithms, encapsulates each one, and make them interchangeable.
Strategy lets the algorithm vary independently from the clients that use it.
Design Principle: "Identify the aspects of your application that vary and separate them
from what stays the same." (cap1.p9)
Design Principle: "Program to an interface not an implementation." (cap1.p12)
Design Principle: "Favor composition over inheritance" (cap1.p23)
*/

//SimUDuck App
class Duck {
  constructor () {
    if (new.target === Duck) {
     throw new TypeError("Cannot construct Abstract instances directly");
   }
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

class MallardDuck extends Duck {
  constructor(){
    super();
    this.setFlightBehavior(new FlightWithWings());
    this.setQuackBehavior(new Quack());
  }

  display(){
      console.info("I'm MallardDuck");
  }
}

class ReadHeadDuck extends Duck {
  constructor(){
    super();
    this.setFlightBehavior(new FlightWithWings());
    this.setQuackBehavior(new Quack());
  }

  display(){
      console.info("I'm ReadHeadDuck");
  }
}

class RubberDuck extends Duck {
  constructor(){
    super();
    this.setFlightBehavior(new FlightNoWay());
    this.setQuackBehavior(new Squeak());
  }

  display(){
      console.info("I'm RubberDuck");
  }
}


//Algorithms Flight
class FlightBehavior {
  constructor(){
    if (new.target === Duck) {
     throw new TypeError("Cannot construct Abstract instances directly");
   }
  }
  flight(){}
}

class FlightWithWings extends FlightBehavior {
  constructor(){
    super();
  }

  flight(){
    console.log("Flight with wings!");
  }
}

class FlightNoWay extends FlightBehavior {
  constructor(){
    super();
  }

  flight(){
    console.log("Flight with NO wings! :(");
  }
}

//Algorithms Quack
class QuackBehavior {
  constructor(){
    if (new.target === Duck) {
     throw new TypeError("Cannot construct Abstract instances directly");
   }
  }
  quack(){}
}

class Quack extends QuackBehavior {
  constructor(){
    super();
  }

  quack(){
    console.log("Say Quack!");
  }
}

class Squeak extends QuackBehavior {
  constructor(){
    super();
  }

  quack(){
    console.log("Say Squeak!");
  }
}

class MuteQuack extends QuackBehavior {
  constructor(){
    super();
  }

  quack(){
    console.log("Say Nothing! :(");
  }
}


//Main
const rubberDuck = new RubberDuck();
rubberDuck.performFlight();
rubberDuck.performQuack();
rubberDuck.swim();
rubberDuck.display();

const mallardDuck = new MallardDuck();
mallardDuck.performFlight();
mallardDuck.performQuack();
mallardDuck.swim();
mallardDuck.display();

const readHeadDuck = new ReadHeadDuck();
readHeadDuck.performFlight();
readHeadDuck.performQuack();
readHeadDuck.swim();
readHeadDuck.display();

//Try to instanciate an "Abstract" class.
//ES6 does not implement Abstract classes, so we mimic the exception manually.
console.info('Testing the Abstract class exception...');
const duck = new Duck();
