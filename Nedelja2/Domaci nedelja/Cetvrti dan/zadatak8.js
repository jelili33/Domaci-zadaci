var a = '';
var e = '';
var n = 5;

for (var i = n; i >= 1; i--) {
    a = '';
    e = '';

    for (let b = 1; b <= i - 1; b++) {
        a = a + ' ';
    }

    for (let c = 1; c <= (n - i) + 1; c++) {
        e = e + '#';
    }

    console.log(a + e);
}
