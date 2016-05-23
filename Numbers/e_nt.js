// Value of 'e' to nth digit

function eValue(n) {
    "use strict";

    if (n === undefined || n > 20) {
        n = 20;
    }

    var val = 0;
    for (var i = 0; i < 200; i++) {
        var fact = 1;
        for (var j = 1; j <= i; j++) {
            fact = fact * j;
        }
        val += (1 / fact);
    }
    return val.toFixed(n);
};

console.log(eValue(20));
