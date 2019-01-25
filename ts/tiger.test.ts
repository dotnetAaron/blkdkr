import {Tiger} from '../ts/tiger'

describe('Monkey', () => {
    let instance: Tiger;

    beforeEach(() => {
         instance = new Tiger();
    });

    it('reduce energy when making sound',  () => {
        expect(instance).toBeInstanceOf(Tiger);
        const makingSound = instance.makeSound();
        expect (makingSound).toBeLessThan (0);
    });
});