exports.selectOdd = function(inputNumbers) {
  let selectedOdd = [];
  for(let number of inputNumbers) {
    if(number % 2 != 0){
      selectedOdd.push(number);
    }
  }
  return  selectedOdd;
}

exports.selectEven = function(inputNumbers) {
  let selectedEven = [];
  for(let number of inputNumbers) {
    if(number % 2 == 0){
      selectedEven.push(number);
    }
  }
  return  selectedEven;
}

exports.addNumbers = function(inputNumbers) {
  let sum = 0;
  for(number of inputNumbers) {
    sum = sum + number;
  }
  return sum;
}

exports.reverse = function(inputNumbers) {
  let reversedArray = [];
  for(let index = 0;index < inputNumbers.length;index++) {
    reversedArray[index] = inputNumbers[inputNumbers.length - 1 - index];
  }
  return reversedArray;
}

exports.selectSecond = function(inputNumbers) {
  let reversedArray = [];
  for(index = 1 ; index < inputNumbers.length ; index += 2) {
    reversedArray.push(inputNumbers[index]);
  }
  return reversedArray;
}
exports.reverseFibonacci = function(length) {
  let fibonacci = [];
  let firstElement = 0;
  let secondElement = 1;
  let sum = 0;
  for(index = 0; index < length; index++) {
    sum = firstElement + secondElement;
    fibonacci[index] = firstElement;
    firstElement = secondElement;
    secondElement = sum;
  }
  return exports.reverse(fibonacci);
}
    
const sortArray = function(unsortedArray) {
  let sortedArray = [];
  for(let position = 0; position < unsortedArray.length; position++){
    sortedArray = swapElements(unsortedArray);
  }
  return sortedArray;
}

const swapElements = function(unsortedArray) {
  for(let index = 0; index < unsortedArray.length; index++) {
    if(unsortedArray[index] >unsortedArray[index + 1]) {
      let stack = unsortedArray[index];
      unsortedArray[index] = unsortedArray[index + 1];
      unsortedArray[index + 1] = stack;
    }
  }
  return unsortedArray;
}

exports.findGreatest = function(inputNumbers) {
  sortArray(inputNumbers);
  return inputNumbers[inputNumbers.length - 1];
}

exports.findLowest = function(inputNumbers) {
  sortArray(inputNumbers);
  return inputNumbers[0];
}

exports.average = function(inputNumbers) {
  return exports.addNumbers(inputNumbers)/inputNumbers.length;
}

exports.findLength = function(inputNumbers) {
  lengthArray = [];
  for(index = 0;index < inputNumbers.length;index++) {
    lengthArray[index] = inputNumbers[index].length;
  }
  return lengthArray;
}

exports.countEven = function(inputNumbers) {
  evenArray = exports.selectEven(inputNumbers);
  return evenArray.length;
}

exports.countOdd = function(inputNumbers) {
  oddArray = exports.selectOdd(inputNumbers);
  return oddArray.length;
}

exports.countNumbersAbove = function(inputNumbers,threshold) {
  let aboveNumbers = numbersAbove(inputNumbers,threshold);
  return  aboveNumbers.length;
}

const numbersAbove = function(inputNumbers,threshold) {
  let above = inputNumbers.filter(number => number > threshold);
  return above;
}
const numbersBelow = function(inputNumbers,threshold) {
  let below = inputNumbers.filter(number => number < threshold);
  return below;
}

exports.countNumbersBelow = function(inputNumbers,threshold) {
  let belowNumbers = numbersBelow(inputNumbers,threshold);
  return  belowNumbers.length;
}

exports.reverseArray = function(inputNumbers) {
  let reversedArray = [];
  for(let index = 0;index < inputNumbers.length;index++) {
    reversedArray[index] = inputNumbers[inputNumbers.length - 1 - index];
  }
  return reversedArray;
}

exports.findIndex = function(inputNumbers,number) {
  for(index in inputNumbers) {
    if(inputNumbers[index] == number) {
      return index;
    }
  }
}

exports.ascend = function(inputNumbers) { 
  return sortArray(inputNumbers);
}

exports.descend = function(inputNumbers) {
  let sortedArray = sortArray(inputNumbers);
  return exports.reverseArray(sortedArray);
}

exports.selectArray = function(input) {
  let number = ""+input;
  let inputNumbers = [];
  for(let index = 0; index < number.length; index++) {
    inputNumbers[index] = +number[index];
  }
  return inputNumbers;
}

exports.selectUnique = function(inputNumbers) {
  let uniqueArray = [];
  for(element of inputNumbers) {
    if(!uniqueArray.includes(element)) {
      uniqueArray.push(element);
    }
  }
  return uniqueArray;
}

exports.selectUnion = function(array1,array2) {
  let uniqueArray = exports.selectUnique(array1);
  for(element of array2) {
    if(!uniqueArray.includes(element)) {
      uniqueArray.push(element);
    }
  }
  return uniqueArray;
}

exports.intersect = function(array1,array2) {
  let uniqueArray = exports.selectUnique(array2);
  let intersection = [];
  for(element of uniqueArray) {
    if(array1.includes(element)) {
      intersection.push(element);
    }
  }
  return intersection;
}

exports.differ = function(array1,array2) {
  let uniqueArray = exports.selectUnique(array1);
  let intersection = [];
  for(element of uniqueArray) {
    if(!array2.includes(element)) {
      intersection.push(element);
    }
  }
  return intersection;
}

exports.checkSubset = function(array1,array2) {
  for(element of array2) {
    if(!array1.includes(element)) {
      return "No";
    }
    let index = array1.indexOf(element);
    array1.splice(index,1);
  }
  return "Yes"
}

const findshorter = function(array1,array2) {
  let shortArray = array1;
  if(array2.length < array1.length) {
    shortArray = array2;
  }
  return shortArray;
}

const findLongest = function(array1,array2) {
  let longArray = array1;
  if(array2.length > array1.length) {
    longArray = array2;
  }
  return longArray;
}

exports.zip = function(array1,array2) {
  let shortArray = findshorter(array1,array2);
  let longArray = findLongest(array1,array2); 
  let zipArray = [];
  for(let index = 0; index < shortArray.length; index++) {
    zipArray[index] = [shortArray[index],longArray[index]];
  }
  return zipArray;
}

exports.rotate = function(array,index) {
  for(let post = 0; post < index; post++) {
    array.push(array[0]);
    array.shift();
  }
  return array;
}
 
exports.partition = function(array,number) {
  let partition = [];
  partition[0] = numbersBelow(array,number);
  partition[0].push(number);
  partition[1] = numbersAbove(array,number);
  return partition;
}
