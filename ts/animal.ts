abstract class Animal {
    constructor(public animalKind:string){
 
    }

    abstract eat(): void;
    abstract makeSound(): void;
    abstract sleep(): void;
}

class Monkey extends Animal {
    private monkeysCounter: number;

    constructor() {
        super("monkey");
        this.monkeysCounter ++;

    }
   eat(): void {

   };
   makeSound(): void {

   };
   sleep(): void {

   };

}

class Tiger extends Animal {

    constructor() {
        super("tiger");
    }
    eat(): void {
 
    };
    makeSound(): void {
 
    };
    sleep(): void {
 
    };
 }

 class Snake extends Animal {
    constructor() {
        super("snake");
    }
    eat(): void {
 
    };
    makeSound(): void {
 
    };
    sleep(): void {
 
    };
 }