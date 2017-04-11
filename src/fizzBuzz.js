var FizzBuzz = function() {

};

FizzBuzz.prototype.count = function() {
  for (var i = 1; i<=100; i++) {
    console.log(this.play(i));
  };
};

FizzBuzz.prototype.isDivisibleBy = function(divNumber, number) {
  return number % divNumber === 0
};

FizzBuzz.prototype.play = function (number) {
  if (this.isDivisibleBy(15, number)) {
    return "FizzBuzz";
  } else if (this.isDivisibleBy(3, number)) {
    return "Fizz";
  } else if (this.isDivisibleBy(5, number)) {
    return "Buzz";
  } else {
    return number;
  }
};
