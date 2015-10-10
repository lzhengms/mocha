var should = require('should');
var fs = require('fs');
//异步测试
describe('File', function () {
    describe('#readFile', function () {
        it('should read test without error', function (done) {
            fs.readFile('test.js', function (err) {
                if (err) throw err;
                done();
            });
        });
    });
});