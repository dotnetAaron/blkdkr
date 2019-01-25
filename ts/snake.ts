import {Animal} from './animal';


export class Snake extends Animal {
    private snakeCounter: number;
    energyLevel:number;

    constructor() {
        super("snake");
        this.snakeCounter ++;
        this.energyLevel = 0;
    }
    eat(): void {
        this.energyLevel = this.energyLevel + 5;
       };
    makeSound(): number {
    this.energyLevel = this.energyLevel - 3;
    return this.energyLevel;
    };
    sleep(): void {
    this.energyLevel = this.energyLevel + 10;
    };
 }