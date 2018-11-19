var assert = require('assert');
var sodium = require('../build/Release/sodium');


var expected = Buffer([
    0x16,0x4b,0x7a,0x7b,0xfc,0xf8,0x19,0xe2,
    0xe3,0x95,0xfb,0xe7,0x3b,0x56,0xe0,0xa3,
    0x87,0xbd,0x64,0x22,0x2e,0x83,0x1f,0xd6,
    0x10,0x27,0x0c,0xd7,0xea,0x25,0x05,0x54,
    0x97,0x58,0xbf,0x75,0xc0,0x5a,0x99,0x4a,
    0x6d,0x03,0x4f,0x65,0xf8,0xf0,0xe6,0xfd,
    0xca,0xea,0xb1,0xa3,0x4d,0x4a,0x6b,0x4b,
    0x63,0x6e,0x07,0x0a,0x38,0xbc,0xe7,0x37
]);


var tKey = Buffer.from("Jefe");
var key = Buffer(32).fill(0);
tKey.copy(key);

var c = Buffer.from("what do ya want for nothing?");

describe("libsodium_auth5", function () {
    it('crypto_auth_hmacsha512', function() {
        var result = sodium.crypto_auth_hmacsha512(c, key);
        assert(result.equals(expected));
    })
});
