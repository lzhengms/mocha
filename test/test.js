var assert=require('assert');

describe('aa',function(){
    describe('#indexOf',function(){
        it('should return -1 when the value is not present',function(){
            assert.equal(-1,[1,2,3].indexOf(5));
            assert.equal(-1,[1,2,3].indexOf(0));
        });
    });
});

after(function(){
    console.log('after');
});

before(function(){
    console.log('before');
});
