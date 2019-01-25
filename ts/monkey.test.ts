import {Monkey} from '../ts/monkey'

describe('Monkey', () => {
    let instance: Monkey;

    beforeEach(() => {
         instance = new Monkey();
    });

    it('reduce energy when making sound',  () => {
        expect(instance).toBeInstanceOf(Monkey);
        const makingSound = instance.makeSound();
        expect (makingSound).toBeLessThan (0);
    });
});