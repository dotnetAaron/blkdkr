import {Animal} from './animal';

export class Tiger extends Animal {
    private tigerCounter: number;
    energyLevel:number;

    constructor() {
        super("tiger");
        this.tigerCounter ++;
        this.energyLevel = 0;
    }
    public eat(food:string): void {
        if (food != "grain") this.energyLevel = this.energyLevel + 5;
       };
    makeSound(): number {
    this.energyLevel = this.energyLevel - 3;
    return this.energyLevel;
    };
    sleep(): void {
    this.energyLevel = this.energyLevel + 5;
    };
 }