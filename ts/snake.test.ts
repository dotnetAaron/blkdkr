import {Snake} from '../ts/snake'

describe('Monkey', () => {
    let instance: Snake;

    beforeEach(() => {
         instance = new Snake();
    });

    it('reduce energy when making sound',  () => {
        expect(instance).toBeInstanceOf(Snake);
        const makingSound = instance.makeSound();
        expect (makingSound).toBeLessThan (0);
    });
});