export abstract class Animal  {
    constructor(public animalKind:string){
 
    }

    abstract energyLevel: number;
    abstract eat(food?:string): void;
    abstract makeSound(): number;
    abstract sleep(): void;

}