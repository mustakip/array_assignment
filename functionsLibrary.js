const selectOdd =function(inputNumbers) {
  let selectedOdd = [];
  for(let number of inputNumbers) {
    if(number % 2 != 0){
      selectedOdd.push(number);
    }
  }
  return  selectedOdd;
}

const selectEven = function(inputNumbers) {
  let selectedEven = [];
  for(let number of inputNumbers) {
    if(number % 2 == 0){
      selectedEven.push(number);
    }
  }
  return  selectedEven;
}

const addNumbers = function(inputNumbers) {
  let sum = 0;
  for(number of inputNumbers) {
    sum = sum + number;
  }
  return sum;
}

const reverse = function(inputNumbers) {
  let reversedArray = [];
  for(let index = 0;index < inputNumbers.length;index++) {
    reversedArray[index] = inputNumbers[inputNumbers.length - 1 - index];
  }
  return reversedArray;
}

const selectSecond = function(inputNumbers) {
  let reversedArray = [];
  for(index = 1 ; index < inputNumbers.length ; index += 2) {
    reversedArray.push(inputNumbers[index]);
  }
  return reversedArray;
}
const reverseFibonacci = function(length) {
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
  return reverse(fibonacci);
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

const findGreatest = function(inputNumbers) {
  sortArray(inputNumbers);
  return inputNumbers[inputNumbers.length - 1];
}

const findLowest = function(inputNumbers) {
  sortArray(inputNumbers);
  return inputNumbers[0];
}

const average = function(inputNumbers) {
  return addNumbers(inputNumbers)/inputNumbers.length;
}

const findLength = function(inputNumbers) {
  lengthArray = [];
  for(index = 0;index < inputNumbers.length;index++) {
    lengthArray[index] = inputNumbers[index].length;
  }
  return lengthArray;
}

const countEven = function(inputNumbers) {
  evenArray = selectEven(inputNumbers);
  return evenArray.length;
}

const countOdd = function(inputNumbers) {
  oddArray = selectOdd(inputNumbers);
  return oddArray.length;
}

const countNumbersAbove = function(inputNumbers,threshold) {
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

const countNumbersBelow = function(inputNumbers,threshold) {
  let belowNumbers = numbersBelow(inputNumbers,threshold);
  return  belowNumbers.length;
}

const reverseArray = function(inputNumbers) {
  let reversedArray = [];
  for(let index = 0;index < inputNumbers.length;index++) {
    reversedArray[index] = inputNumbers[inputNumbers.length - 1 - index];
  }
  return reversedArray;
}

const findIndex = function(inputNumbers,number) {
  for(index in inputNumbers) {
    if(inputNumbers[index] == number) {
      return index;
    }
  }
}

const checkAscending = function(inputNumbers) { 
  for(let index = 0; index < inputNumbers.length; index++) {
    if(inputNumbers[index] > inputNumbers[index+1]){
      return "No";
    }
  }
  return "Yes";
}

const checkDescending = function(inputNumbers) {
  for(let index = 0; index < inputNumbers.length; index++) {
    if(inputNumbers[index] < inputNumbers[index+1]){
      return "No"
    }
  }
  return "Yes";
}

const selectArray = function(input) {
  let number = ""+input;
  let inputNumbers = [];
  for(let index = 0; index < number.length; index++) {
    inputNumbers[index] = +number[index];
  }
  return inputNumbers;
}

const selectUnique = function(inputNumbers) {
  let uniqueArray = [];
  for(element of inputNumbers) {
    if(!uniqueArray.includes(element)) {
      uniqueArray.push(element);
    }
  }
  return uniqueArray;
}

const selectUnion = function(array1,array2) {
  let uniqueArray = selectUnique(array1);
  for(element of array2) {
    if(!uniqueArray.includes(element)) {
      uniqueArray.push(element);
    }
  }
  return uniqueArray;
}

const intersect = function(array1,array2) {
  let uniqueArray = selectUnique(array2);
  let intersection = [];
  for(element of uniqueArray) {
    if(array1.includes(element)) {
      intersection.push(element);
    }
  }
  return intersection;
}

const differ = function(array1,array2) {
  let uniqueArray = selectUnique(array1);
  let intersection = [];
  for(element of uniqueArray) {
    if(!array2.includes(element)) {
      intersection.push(element);
    }
  }
  return intersection;
}

const checkSubset = function(array1,array2) {
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

const zip = function(array1,array2) {
  let shortArray = findshorter(array1,array2);
  let longArray = findLongest(array1,array2); 
  let zipArray = [];
  for(let index = 0; index < shortArray.length; index++) {
    zipArray[index] = [shortArray[index],longArray[index]];
  }
  return zipArray;
}

const rotate = function(array,index) {
  for(let post = 0; post < index; post++) {
    array.push(array[0]);
    array.shift();
  }
  return array;
}
 
const partition = function(array,number) {
  let partition = [];
  partition[0] = numbersBelow(array,number);
  partition[0].push(number);
  partition[1] = numbersAbove(array,number);
  return partition;
}

exports.average = average;
exports.partition = partition;
exports.rotate = rotate;
exports.zip = zip;
exports.findLongest = findLongest;
exports.findshorter = findshorter;
exports.checkSubset = checkSubset;
exports.differ = differ;
exports.intersect = intersect;
exports.selectUnion = selectUnion;
exports.selectUnique = selectUnique;
exports.selectArray = selectArray;
exports.checkDescending = checkDescending;
exports.checkAscending = checkAscending;
exports.findIndex = findIndex;
exports.reverseArray = reverseArray;
exports.countNumbersBelow = countNumbersBelow;
exports.countNumbersAbove = countNumbersAbove;
exports.countOdd = countOdd;
exports.countEven = countEven;
exports.findLength = findLength;
exports.findLowest = findLowest;
exports.findGreatest = findGreatest;
exports.swapElements = swapElements;
exports.sortArray = sortArray;
exports.reverseFibonacci = reverseFibonacci;
exports.selectSecond = selectSecond;
exports.reverse = reverse;
exports.addNumbers = addNumbers;
exports.selectEven = selectEven;
exports.selectOdd = selectOdd;
