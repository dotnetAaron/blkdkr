import {Animal} from './animal';

export class Monkey extends Animal {
    private monkeysCounter: number;
    energyLevel:number;

    constructor() {
        super("monkey");
        this.monkeysCounter ++;
        this.energyLevel = 0;
    }
   eat(): void {
    this.energyLevel = this.energyLevel + 2;
   };
   makeSound(): number {
    this.energyLevel = this.energyLevel - 4;
    return this.energyLevel;
   };
   sleep(): void {
    this.energyLevel = this.energyLevel + 10;
   };

   play():string {
    var monkeyMessage;

    monkeyMessage = (this.energyLevel >= 8? monkeyMessage = "Oooo Oooo Oooo" : "Monkey is too tired")
    return monkeyMessage;
   }

}