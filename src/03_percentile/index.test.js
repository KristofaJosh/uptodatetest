const subject = require ('.'); 
 
describe('Percentile', () => {

    it('should return 90 percentile for the array of integers', () => {
        expect(subject.percentile(90, [1, 3, 7, 5, 9, 5, 2])).toEqual([9]);
    });

});