const testList = [1, 2, 3, 4, 5];

function sumFor(list) {
  let counter = 0;
  for (let i = 0; i < list.length; i++) {
    counter += list[i];
  }
  return counter;
}

console.log(sumFor(testList));

function sumWhile(list) {
  let counter = 0;
  let iteration = 0;
  while (iteration < list.length) {
    counter += list[iteration];
    iteration++;
  }
  return counter;
}

console.log(sumWhile(testList));

function recursion(list, counter) {
  if (counter <= 0) {
    return 0;
  }
  return (recursion(list, counter - 1) + list[counter - 1]);
}

function sumRecursion(list) {
  const counter = list.length;
  return recursion(list, counter);
}

console.log(sumRecursion(testList));

function sumTheSimpleWay(list) {
  // noinspection JSUnresolvedVariable
  return _.reduce(list, function (memo, num) {
    return (memo + num);
  }, 0);
}

console.log(sumTheSimpleWay(testList));
