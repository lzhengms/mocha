var assert = require('assert');
var fs = require('fs');

describe('Array', function () {
    beforeEach(function () {
        console.log('beforeEach Array');
    })
    before(function () {
        console.log('before Array')
    })
    before(function () {
        console.log('before Array second time')
    })
    afterEach(function () {
        console.log('afterEach Array')
    })
    after(function () {
        console.log('after Array')
    })
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1, 2, 3].indexOf(0));
        })
        it('should return 1 when the value is not present', function () {

        })
    })
})

describe('File',function(){
    beforeEach(function(){
        console.log('beforeEach File test')
    })
    afterEach(function(){
        console.log('afterEach File test')
    })
    describe('#readFile()',function(){
        it('should read test.js without error',function(done){
            fs.readFile('test.js',function(err){
                if(err){
                    throw err;
                }
                done();
            })
        })
        it('should read a.js without error',function(done){
            fs.readFile('test.js',function(err){
                if(err){
                    throw err;
                }
                done();
            })
        })
    })
})