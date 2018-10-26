const isEven = function(number) {
  return number % 2 == 0;
}

const isOdd = function(number) {
  return number % 2 != 0;
} 

const selectOddNumbers =function(inputNumbers) {
  return inputNumbers.filter(isOdd);
}

const selectEvenNumbers = function(inputNumbers) {
  return inputNumbers.filter(isEven);
}

const add = function(number1,number2) {
  return number1 + number2;
}

const addNumbers = function(inputNumbers) {
  return inputNumbers.reduce(add,0);
}

const reverseConcat = function(initialValue,currentValue) {
  return [currentValue].concat(initialValue);
}

const reverse = function(inputNumbers) {
  return inputNumbers.reduce(reverseConcat,[]);
}

const concatEverySecondNo = function(initial,current) {
  let {index,elements} = initial;
  let newElements = elements;
  if(index % 2 != 0) {
    newElements = newElements.concat(current);
  }
  return {index : index + 1, elements : newElements};
}

const selectEverySecondNo = function(inputNumbers) {
  return inputNumbers.reduce(concatEverySecondNo,{index : 0 ,elements : []}).elements;
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

const findGreater = function(previousElement,currentElement) {
  return Math.max(previousElement,currentElement);
}

const findGreatestNumber = function(inputNumbers) {
  return inputNumbers.reduce(findGreater);
}

const findSmaller = function(previousElement,currentElement) {
  return Math.min(previousElement,currentElement);
}

const findSmallestNumber = function(inputNumbers) {
  return inputNumbers.reduce(findSmaller); 
}

const findAverage = function(inputNumbers) {
  return addNumbers(inputNumbers)/inputNumbers.length;
}

const extractLength = function(element) {
  return element.length;
}

const findLength = function(inputElements) {
  return inputElements.map(extractLength);
}

const countEvenNumbers = function(inputNumbers) {
  return selectEvenNumbers(inputNumbers).length;
}

const countOddNumbers = function(inputNumbers) {
  return selectOddNumbers(inputNumbers).length;
}

const countNumbersAbove = function(inputNumbers,threshold) {
  return selectNumbersAbove(inputNumbers,threshold).length;
} 
const isGreaterThan = function(threshold) {
  return function(number) {
    return number > threshold;
  }
}

const selectNumbersAbove = function(inputNumbers,threshold) {
  let numbersAbove = inputNumbers.filter(isGreaterThan(threshold));
  return numbersAbove;
}

const isLessThan = function(threshold) {
  return function(number) {
    return number < threshold;
  }
}

const selectNumbersBelow = function(inputNumbers,threshold) {
  return inputNumbers.filter(isLessThan(threshold));
}

const countNumbersBelow = function(inputNumbers,threshold) {
  let belowNumbers = selectNumbersBelow(inputNumbers,threshold);
  return  belowNumbers.length;
}

const reverseArray = function(inputNumbers) {
  return inputNumbers.reduce(reverseConcat,[]);
}

const findIndex = function(inputNumbers,number) {
  for(index in inputNumbers) {
    if(inputNumbers[index] == number) {
      return index;
    }
  }
}

const checkGreater = function(previousState,currentValue) {
  let {number,state} = previousState;
  if(currentValue >= number && state){
    return {number : currentValue, state : true };
  }
  return {number : currentValue, state : false}
};

const isAscending = function(inputNumbers) { 
  return inputNumbers.reduce(checkGreater,{number : inputNumbers[0],state : true}).state;
}

const isDescending = function(inputNumbers) {
  return isAscending(reverse(inputNumbers));
}

const extractDigits = function(input) {
  let text = ""+input;
  return text.split("");
}

const selectUnique = function(initialValue,currentValue) {
  if(! initialValue.includes(currentValue)){
    initialValue.push(currentValue);
    return initialValue;
  }
  return initialValue;
}

const selectUniqueElements = function(inputNumbers) {
  return inputNumbers.reduce(selectUnique,[]);
}

const selectUnion = function(array1,array2) {
  let combinedArray = array1.concat(array2);
  return selectUniqueElements(combinedArray);
}

const selectElementIfCommon = function (set1) {
  return function(selectionSoFar,currentElement) {
    if(set1.includes(currentElement)) {
      return selectionSoFar.concat(currentElement);
    }
    return selectionSoFar;
  }
}

const intersect = function(set1,set2) {   
  return set2.reduce(selectElementIfCommon(set1),[]);
}

const differentiate = function(array2) {
  return function(differentiationSoFar,currentElement) {
    if(!array2.includes(currentElement)) {
      return differentiationSoFar.concat(currentElement);
    }
    return differentiationSoFar;
  }
}

const differ = function(array1,array2) {
  return array1.reduce(differentiate(array2),[]);
}

const isPresent = function(array1) {
  return function(number) {
    return array1.includes(number);
  }
}

const isSubset = function(array1,array2) {
  return array2.every(isPresent(array1));
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

const zipWith = function(longArray) {
  return function(zippedSoFar,currentElement) {
    let {index,zipArray} = zippedSoFar;
    let concatedArray = zipArray.concat([[currentElement,longArray[index]]]);
    return{index : index + 1, zipArray : concatedArray};
  }
}

const zip = function(array1,array2) {
  let shortArray = findshorter(array1,array2);
  let longArray = findLongest(array1,array2); 
  return  shortArray.reduce(zipWith(longArray),{index :0,zipArray :[]}).zipArray;
}

const rotate = function(array,index) {
  let firstPart = array.slice(0,index);
  let secondPart = array.slice(index);
  let rotatedArray = secondPart.concat(firstPart);
  return rotatedArray;
}

const partition = function(array,number) {
  let partition = [];
  partition[0] = selectNumbersBelow(array,number);
  if(array.length > 0){
    partition[0].push(number);
  }
  partition[1] = selectNumbersAbove(array,number);
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
exports.reverseArray = reverseArray;
exports.selectUniqueElements = selectUniqueElements;
exports.isAscending = isAscending;
exports.isDescending = isDescending;
exports.countNumbersBelow = countNumbersBelow;
exports.countNumbersAbove = countNumbersAbove;
exports.reverseFibonacci = reverseFibonacci;
exports.selectEverySecondNo = selectEverySecondNo;
