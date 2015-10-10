var fs=require('fs');

describe('File',function(){
    describe('#readFile()',function(){
        it('shoule read a.js without error',function(done){
            fs.readFile('a.js',function(err){
                if(err) throw err;
                done();
            })
        })

        it.skip('shoule read b.js without error',function(done){
            fs.readFile('b.js',function(err){
                if(err) throw err;
                done();
            })
        })

        it.only('shoule read test.js without error',function(done){
            fs.readFile('test.js',function(err){
                if(err) throw err;
                done();
            })
        })
    })
})