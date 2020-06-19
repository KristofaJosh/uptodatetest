const subject = require ('.'); 

describe('Odd integers', () => {

    it('should return odd numbers from integer', () => {
        expect(subject.oddIntegers([1, 3, 5, 6, 8, 2, 0, 11])).toEqual([1, 3, 5, 11]);
    });

});