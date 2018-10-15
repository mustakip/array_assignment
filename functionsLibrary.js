exports.extractOdd = function(numberArray) {
  let extractedOdd = [];
  for(let number of numberArray) {
    if(number % 2 != 0){
      extractedOdd.push(number);
    }
  }
  return  extractedOdd;
}

exports.extractEven = function(numberArray) {
  let extractedEven = [];
  for(let number of numberArray) {
    if(number % 2 == 0){
      extractedEven.push(number);
    }
  }
  return  extractedEven;
}

exports.addNumbers = function(numberArray) {
  let sum = 0;
  for(number of numberArray) {
    sum = sum + number;
  }
  return sum;
}

exports.reverse = function(numberArray) {
  reversedArray = numberArray.reverse("");
  return reversedArray ;
}

exports.extractSecond = function(numberArray) {
  let reversedArray = [];
  for(index = 1 ; index < numberArray.length ; index += 2) {
    reversedArray.push(numberArray[index]);
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

exports.findGreatest = function(numberArray) {
  sortArray(numberArray);
  return numberArray[numberArray.length - 1];
}

exports.findLowest = function(numberArray) {
  sortArray(numberArray);
  return numberArray[0];
}

exports.average = function(numberArray) {
  return exports.addNumbers(numberArray)/numberArray.length;
}

exports.findLength = function(numberArray) {
  lengthArray = [];
  for(index = 0;index < numberArray.length;index++) {
    lengthArray[index] = numberArray[index].length;
  }
  return lengthArray;
}

exports.countEven = function(numberArray) {
  evenArray = exports.extractEven(numberArray);
  return evenArray.length;
}

exports.countOdd = function(numberArray) {
  oddArray = exports.extractOdd(numberArray);
  return oddArray.length;
}

exports.countNumbersAbove = function(numberArray,threshold) {
  let aboveNumbers = numbersAbove(numberArray,threshold);
  return  aboveNumbers.length;
}

const numbersAbove = function(numberArray,threshold) {
  let above = numberArray.filter(number => number > threshold);
  return above;
}
const numbersBelow = function(numberArray,threshold) {
  let below = numberArray.filter(number => number < threshold);
  return below;
}

exports.countNumbersBelow = function(numberArray,threshold) {
  let belowNumbers = numbersBelow(numberArray,threshold);
  return  belowNumbers.length;
}

exports.reverseArray = function(numberArray) {
  let reversedArray = [];
  for(let index = 0;index < numberArray.length;index++) {
    reversedArray[index] = numberArray[numberArray.length - 1 - index];
  }
  return reversedArray;
}

exports.findIndex = function(numberArray,number) {
  for(index in numberArray) {
    if(numberArray[index] == number) {
      return index;
    }
  }
}

exports.ascend = function(numberArray) { 
  return sortArray(numberArray);
}

exports.descend = function(numberArray) {
  let sortedArray = sortArray(numberArray);
  return exports.reverseArray(sortedArray);
}

exports.extractArray = function(input) {
  let number = ""+input;
  let numberArray = [];
  for(let index = 0; index < number.length; index++) {
    numberArray[index] = +number[index];
  }
  return numberArray;
}

exports.extractUnique = function(numberArray) {
  let uniqueArray = [];
  for(element of numberArray) {
    if(!uniqueArray.includes(element)) {
      uniqueArray.push(element);
    }
  }
  return uniqueArray;
}

exports.extractUnion = function(array1,array2) {
  let uniqueArray = exports.extractUnique(array1);
  for(element of array2) {
    if(!uniqueArray.includes(element)) {
      uniqueArray.push(element);
    }
  }
  return uniqueArray;
}

exports.intersect = function(array1,array2) {
  let uniqueArray = exports.extractUnique(array2);
  let intersection = [];
  for(element of uniqueArray) {
    if(array1.includes(element)) {
      intersection.push(element);
    }
  }
  return intersection;
}

exports.differ = function(array1,array2) {
  let uniqueArray = exports.extractUnique(array1);
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
