/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.14/15.4.4.14-5-30.js
 * @description Array.prototype.indexOf - side effects produced by step 3 are visible when an exception occurs
 */


function testcase() {

        var stepFiveOccurs = false;

        var obj = {};
        Object.defineProperty(obj, "length", {
            get: function () {
                return {
                    valueOf: function () {
                        throw new TypeError();
                    }
                };
            },
            configurable: true
        });

        var fromIndex = {
            valueOf: function () {
                stepFiveOccurs = true;
                return 0;
            }
        };

        try {
            Array.prototype.indexOf.call(obj, undefined, fromIndex);
            return false;
        } catch (e) {
            return (e instanceof TypeError) && !stepFiveOccurs;
        }
    }
runTestCase(testcase);