const subject = require ('.'); 

describe('translate', () => {

    it('should return number in alien format', () => {
        expect(subject.translate(22)).toEqual("CBB");
    });

});