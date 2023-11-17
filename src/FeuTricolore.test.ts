import { FeuTricolore } from './FeuTricolore';

describe('FeuTricolore', () => {
    let consoleSpy: jest.SpyInstance;

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log');
    });    

    afterEach(() => {
        consoleSpy.mockRestore();
    });

    test('doit enregistrer un changement d\'état dans la console', () => {
        const feu = new FeuTricolore();
        feu.changerEtat('vert');
        expect(consoleSpy).toHaveBeenCalledWith("L'état du feu est maintenant : vert");
    });
});
