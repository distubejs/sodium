var assert = require('assert');
var sodium = require('../build/Release/sodium');

var firstKey = Buffer.from([
    0x1b, 0x27, 0x55, 0x64, 0x73, 0xe9, 0x85,
    0xd4, 0x62, 0xcd, 0x51, 0x19, 0x7a, 0x9a,
    0x46, 0xc7, 0x60, 0x09, 0x54, 0x9e, 0xac,
    0x64, 0x74, 0xf2, 0x06, 0xc4, 0xee, 0x08,
    0x44, 0xf6, 0x83, 0x89
]);

var nonceprefix = Buffer.from([
    0x69, 0x69, 0x6e, 0xe9, 0x55, 0xb6,
    0x2b, 0x73, 0xcd, 0x62, 0xbd, 0xa8,
    0x75, 0xfc, 0x73, 0xd6 
]);

var c = Buffer.from([
    0x65, 0x78, 0x70, 0x61, 0x6e, 0x64, 0x20, 0x33,
    0x32, 0x2d, 0x62, 0x79, 0x74, 0x65, 0x20, 0x6b 
]);

var expected= Buffer.from([
    0xdc,0x90,0x8d,0xda,0x0b,0x93,0x44,0xa9,
    0x53,0x62,0x9b,0x73,0x38,0x20,0x77,0x88,
    0x80,0xf3,0xce,0xb4,0x21,0xbb,0x61,0xb9,
    0x1c,0xbd,0x4c,0x3e,0x66,0x25,0x6c,0xe4
]);

describe("libsodium_core1", function () {
    it('crypto_core_hsalsa20', function() {
        var zero = Buffer.alloc(16);
        var secondKey = sodium.crypto_core_hsalsa20(nonceprefix, firstKey, c);
        assert(secondKey.equals(expected));
    });
});

