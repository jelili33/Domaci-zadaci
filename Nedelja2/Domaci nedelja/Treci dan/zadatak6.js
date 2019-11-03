var n = 100;
var i;
var ispis;
for (i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        ispis = "FizzBuzz";
    }
    else if (i % 3 == 0) {
        ispis = "Fizz";
    }
    else if (i % 5 == 0) {
        ispis = "Buzz";
    } else {
        ispis = i;
    }
    console.log(ispis);
}




