// Copyright 2018 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Katakana`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v11.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x003037,
    0x01B000
  ],
  ranges: [
    [0x003001, 0x003003],
    [0x003008, 0x003011],
    [0x003013, 0x00301F],
    [0x003030, 0x003035],
    [0x00303C, 0x00303D],
    [0x003099, 0x00309C],
    [0x0030A0, 0x0030FF],
    [0x0031F0, 0x0031FF],
    [0x0032D0, 0x0032FE],
    [0x003300, 0x003357],
    [0x00FE45, 0x00FE46],
    [0x00FF61, 0x00FF9F]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Katakana}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Katakana}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Kana}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Kana}"
);
testPropertyEscapes(
  /^\p{scx=Katakana}+$/u,
  matchSymbols,
  "\\p{scx=Katakana}"
);
testPropertyEscapes(
  /^\p{scx=Kana}+$/u,
  matchSymbols,
  "\\p{scx=Kana}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x003012,
    0x003036,
    0x0032FF
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x003000],
    [0x003004, 0x003007],
    [0x003020, 0x00302F],
    [0x003038, 0x00303B],
    [0x00303E, 0x003098],
    [0x00309D, 0x00309F],
    [0x003100, 0x0031EF],
    [0x003200, 0x0032CF],
    [0x003358, 0x00DBFF],
    [0x00E000, 0x00FE44],
    [0x00FE47, 0x00FF60],
    [0x00FFA0, 0x01AFFF],
    [0x01B001, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Katakana}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Katakana}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Kana}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Kana}"
);
testPropertyEscapes(
  /^\P{scx=Katakana}+$/u,
  nonMatchSymbols,
  "\\P{scx=Katakana}"
);
testPropertyEscapes(
  /^\P{scx=Kana}+$/u,
  nonMatchSymbols,
  "\\P{scx=Kana}"
);