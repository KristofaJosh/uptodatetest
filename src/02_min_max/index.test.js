const subject = require ('.'); 

describe('Min & max', () => {

    it('should return min and max values of the array', () => {
        expect(subject.minMax([10, 4, 5, 7, 99, 1])).toEqual({
            min: 1,
            max: 99,
        });
    });

});