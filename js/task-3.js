console.log("-------Завдання-3-------");

const findBestEmployee = function (employees) {
  let arro = Object.entries(employees);
  let max = 0;
  let name = "";
  for (let vall of arro) {
    if (vall[1] > max) {
      max = vall[1];
      name = vall[0];
    }
  }
  return name + ' - ' + max;
};


console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    }),
  ); // lorence
  

  console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    }),
  ); // mango
  
  
  console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    }),
  ); // lux