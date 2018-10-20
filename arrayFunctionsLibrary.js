const selectOddNumbers =function(inputNumbers) {
  return inputNumbers.filter(function(number) {return number % 2 != 0});
}

const selectEvenNumbers = function(inputNumbers) {
  return inputNumbers.filter(function(number) {return number % 2 == 0});
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

const selectEverySecondNo = function(inputNumbers) {
  let selectedNumberArray = [];
  for(index = 1 ; index < inputNumbers.length ; index += 2) {
    selectedNumberArray.push(inputNumbers[index]);
  }
  return selectedNumberArray;
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

const sort = function(unsortedArray) {
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

const findGreatestNumber = function(inputNumbers) {
  sort(inputNumbers);
  return inputNumbers[inputNumbers.length - 1];
}

const findSmallestNumber = function(inputNumbers) {
 return (sort(inputNumbers))[0];
}

const findAverage = function(inputNumbers) {
  return addNumbers(inputNumbers)/inputNumbers.length;
}

const findLength = function(inputElements) {
  return inputElements.map(function(element){return element.length});
}

const countEvenNumbers = function(inputNumbers) {
  return selectEvenNumbers(inputNumbers).length;
}

const countOddNumbers = function(inputNumbers) {
  return selectOddNumbers(inputNumbers).length;
}

const countNumbersAbove = function(inputNumbers,threshold) {
  return numbersAbove(inputNumbers,threshold).length;
} 

const isGreaterThan = function(number,threshold) {
  return number > threshold;
}

const numbersAbove = function(inputNumbers,threshold) {
  //let above = inputNumbers.filter(a => a > threshold);
  const greater = function(number) {
    return isGreaterThan(number,threshold);
  }
  let above = inputNumbers.filter(greater);
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

const isAscending = function(inputNumbers) { 
  for(let index = 0; index < inputNumbers.length; index++) {
    if(inputNumbers[index] > inputNumbers[index+1]){
      return "No";
    }
  }
  return "Yes";
}

const isDescending = function(inputNumbers) {
  for(let index = 0; index < inputNumbers.length; index++) {
    if(inputNumbers[index] < inputNumbers[index+1]){
      return "No"
    }
  }
  return "Yes";
}

const extractDigits = function(input) {
  let number = ""+input;
  let inputNumbers = [];
  for(let index = 0; index < number.length; index++) {
    inputNumbers[index] = +number[index];
  }
  return inputNumbers;
}

const selectUniqueElements = function(inputNumbers) {
  let uniqueArray = [];
  for(element of inputNumbers) {
    if(!uniqueArray.includes(element)) {
      uniqueArray.push(element);
    }
  }
  return uniqueArray;
}

const selectUnion = function(array1,array2) {
  let uniqueArray = selectUniqueElements(array1);
  for(element of array2) {
    if(!uniqueArray.includes(element)) {
      uniqueArray.push(element);
    }
  }
  return uniqueArray;
}

const intersect = function(array1,array2) {
  let uniqueArray = selectUniqueElements(array2);
  let intersection = [];
  for(element of uniqueArray) {
    if(array1.includes(element)) {
      intersection.push(element);
    }
  }
  return intersection;
}

const differ = function(array1,array2) {
  let uniqueArray = selectUniqueElements(array1);
  let intersection = [];
  for(element of uniqueArray) {
    if(!array2.includes(element)) {
      intersection.push(element);
    }
  }
  return intersection;
}

const isSubset = function(array1,array2) {
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

exports.zip = zip;
exports.rotate = rotate;
exports.differ = differ;
exports.findAverage = findAverage;
exports.reverse = reverse;
exports.countOddNumbers = countOddNumbers;
exports.countEvenNumbers = countEvenNumbers;
exports.selectOddNumbers = selectOddNumbers;
exports.sort = sort;
exports.partition = partition;
exports.intersect = intersect;
exports.findIndex = findIndex;
exports.findLength = findLength;
exports.selectEvenNumbers = selectEvenNumbers;
exports.addNumbers = addNumbers;
exports.findSmallestNumber = findSmallestNumber;
exports.findLongest = findLongest;
exports.findshorter = findshorter;
exports.isSubset = isSubset;
exports.selectUnion = selectUnion;
exports.extractDigits = extractDigits;
exports.findGreatestNumber = findGreatestNumber;
exports.swapElements = swapElements;
exports.reverseArray = reverseArray;
exports.selectUniqueElements = selectUniqueElements;
exports.isAscending = isAscending;
exports.isDescending = isDescending;
exports.countNumbersBelow = countNumbersBelow;
exports.countNumbersAbove = countNumbersAbove;
exports.reverseFibonacci = reverseFibonacci;
exports.selectEverySecondNo = selectEverySecondNo;
