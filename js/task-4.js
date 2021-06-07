console.log("-------Завдання-4-------");

const countTotalSalary = function (employees) {
 //  var sample = { a: 1 , b: 2 , c:3 };
var summed = 0;

for (var key in employees) {
    summed += sample[key];
};

console.log(summed);
};





console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400
