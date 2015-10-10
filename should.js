var should = require('should');

describe('Array', function () {
    describe('#indexOf', function () {
        it('sholud return -1 when the value is not present', function () {
            [1, 2, 3].indexOf(5).should.equal(-1);
            [1, 2, 3].indexOf(1).should.equal(0);
        });
    });
});

/*
describe('Array随便取',function(){
   describe('#indexOf',function(){
       it('aa',function(){
//具体的测试语句

       });
   })
});*/
