'use strict';
var lookAndSay = require('../modules/lookAndSay');
var assert = require('assert');

describe('#say()', function(){

    it('should return false when passed value "0"', function(){
        assert.equal(lookAndSay.say(""), false);
    });

    it('should return 11 when passed value "1"', function(){
        assert.equal(lookAndSay.say("1"), "11");
    });

    it('should return 21 when passed value "11"', function(){
        assert.equal(lookAndSay.say("11"), "21");
    });

    it('should return 1211 when passed value "21"', function(){
        assert.equal(lookAndSay.say("21"), "1211");
    });

    it('should return 111221 when passed value "1211"', function(){
        assert.equal(lookAndSay.say("1211"), "111221");
    });
});

describe('#repeat()', function(){

    it('should return false when passed value 0', function(){
        assert.equal(lookAndSay.repeat(0), false);
    });

    it('should return 11 when passed value 1', function(){
        assert.equal(lookAndSay.repeat(1), '11');
    });

    it('should return 21 when passed value 2', function(){
        assert.equal(lookAndSay.repeat(2), '21');
    });

    it('should return 1211 when passed value 3', function(){
        assert.equal(lookAndSay.repeat(3), '1211');
    });

    it('should return 111221 when passed value 4', function(){
        assert.equal(lookAndSay.repeat(4), '111221');
    });
});

describe('#startWith()', function(){

    it('should return 18 when passed value 8', function(){
        assert.equal(lookAndSay.startWith('8').repeat(1), '18');
    });

    it('should return 1118 when passed value start as 8 and repeat as 2', function(){
        assert.equal(lookAndSay.startWith('8').repeat(2), '1118');
    });
});