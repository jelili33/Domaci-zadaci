var n = 5;
var a = '';
var a2 = '';

for (var i = n; i >= 1; i--) {
    a = '';
    a2 = '';

    for (var b = 1; b <= i - 1; b++) {
        a = a + ' ';
    }

    for (var c = 1; c <= (n - i) + 1; c++) {
        a2 = a2 + '#';
    }

    console.log(a + a2 + ' ' + a2 + a);
}

