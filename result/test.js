/* automatically generated by JSCoverage - do not edit */
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    _$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (typeof _$jscoverage !== 'object') {
  _$jscoverage = {};
}
if (! _$jscoverage['test.js']) {
  _$jscoverage['test.js'] = [];
  _$jscoverage['test.js'][1] = 0;
  _$jscoverage['test.js'][3] = 0;
  _$jscoverage['test.js'][4] = 0;
  _$jscoverage['test.js'][5] = 0;
  _$jscoverage['test.js'][6] = 0;
  _$jscoverage['test.js'][7] = 0;
  _$jscoverage['test.js'][12] = 0;
  _$jscoverage['test.js'][13] = 0;
  _$jscoverage['test.js'][16] = 0;
  _$jscoverage['test.js'][17] = 0;
}
_$jscoverage['test.js'].source = ["var assert=require('assert');","","describe('aa',function(){","    describe('#indexOf',function(){","        it('should return -1 when the value is not present',function(){","            assert.equal(-1,[1,2,3].indexOf(5));","            assert.equal(-1,[1,2,3].indexOf(0));","        });","    });","});","","after(function(){","    console.log('after');","});","","before(function(){","    console.log('before');","});"];
_$jscoverage['test.js'][1]++;
var assert = require("assert");
_$jscoverage['test.js'][3]++;
describe("aa", (function () {
  _$jscoverage['test.js'][4]++;
  describe("#indexOf", (function () {
  _$jscoverage['test.js'][5]++;
  it("should return -1 when the value is not present", (function () {
  _$jscoverage['test.js'][6]++;
  assert.equal(-1, [1, 2, 3].indexOf(5));
  _$jscoverage['test.js'][7]++;
  assert.equal(-1, [1, 2, 3].indexOf(0));
}));
}));
}));
_$jscoverage['test.js'][12]++;
after((function () {
  _$jscoverage['test.js'][13]++;
  console.log("after");
}));
_$jscoverage['test.js'][16]++;
before((function () {
  _$jscoverage['test.js'][17]++;
  console.log("before");
}));