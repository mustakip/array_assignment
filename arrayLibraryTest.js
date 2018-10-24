const assert = require("assert");
const arrayLib = require("./arrayLibrary.js"); 

const {selectOddNumbers, selectEvenNumbers} = arrayLib;
const {addNumbers, reverse} = arrayLib;
const {selectEverySecondNo,reverseFibonacci} = arrayLib;
const {findGreatestNumber,findSmallestNumber} = arrayLib;
const {findAverage,findLength} = arrayLib;
const {countEvenNumbers, countOddNumbers} = arrayLib;
const {countNumbersAbove, countNumbersBelow} = arrayLib;
const {reverseArray, findIndex} = arrayLib;
const {isAscending,isDescending} = arrayLib;
const {selectUnion, selectUniqueElements} = arrayLib;
const {intersect, extractDigits} = arrayLib;
const {differ, isSubset} = arrayLib;
const {zip, rotate} = arrayLib;
const {partition} = arrayLib;
//------------------------------------------------------------------------------------------------------//
const testSelectOddNumbers = function(input,expectedOutput) { 
  return assert.deepEqual(selectOddNumbers(input),expectedOutput);
}

// 1. selecting odd number.
testSelectOddNumbers([-2,-1,0],[-1]);
testSelectOddNumbers([],[]);
testSelectOddNumbers([21,34,6],[21]);
testSelectOddNumbers([23,57,98,54],[23,57]);
testSelectOddNumbers([56,78,93,103],[93,103]);
testSelectOddNumbers([2,3,4,7,8,9,6,7,3,2,60,78,674],[3,7,9,7,3]);
//------------------------------------------------------------------------------------------------------//
const testSelectEvenNumbers = function(input,expectedOutput) { 
  return assert.deepEqual(selectEvenNumbers(input),expectedOutput);
}

// 2. selecting even number.
testSelectEvenNumbers([],[]);
testSelectEvenNumbers([-2,-1,0],[-2,0]);
testSelectEvenNumbers([21,34,6],[34,6]);
testSelectEvenNumbers([23,57,98,54],[98,54]);
testSelectEvenNumbers([56,78,93,103],[56,78]);
testSelectEvenNumbers([2,3,4,7,8,9,6,7,3,2,60,78,674],[2,4,8,6,2,60,78,674]);
//------------------------------------------------------------------------------------------------------//
const testAddNumbers = function(input,expectedOutput) { 
  return assert.deepEqual(addNumbers(input),expectedOutput);
}

// 3. sum of list of numbers.
testAddNumbers([21,34,6],61);
testAddNumbers([],0);
testAddNumbers([-2,-1,0],-3);
testAddNumbers([23,57,98,54],232);
testAddNumbers([56,78,93,103],330);
testAddNumbers([2,3,4,7,8,9,6,7,3,2,60,78,674],863);
//------------------------------------------------------------------------------------------------------//
const testReverse = function(input,expectedOutput) { 
  return assert.deepEqual(reverse(input),expectedOutput);
}

// 4. printing reverse.
testReverse([21,34,6],[6,34,21]);
testReverse([],[]);
testReverse([-2,-1,0],[0,-1,-2]);
testReverse([23,57,98,54],[54,98,57,23]);
testReverse([56,78,93,103],[103,93,78,56]);
//------------------------------------------------------------------------------------------------------//
const testSelectEverySecondNo = function(input,expectedOutput) { 
  return assert.deepEqual(selectEverySecondNo(input),expectedOutput);
}

// 5. selecting every second element. 
testSelectEverySecondNo([21,34,6],[34]);
testSelectEverySecondNo([],[]);
testSelectEverySecondNo([-2,-1,0],[-1]);
testSelectEverySecondNo([23,57,98,54],[57,54]);
testSelectEverySecondNo([56,78,93,103],[78,103]);
testSelectEverySecondNo([2,3,4,7,8,9,6,7,3,2,60,78,674],[3,7,9,7,2,78]);
//------------------------------------------------------------------------------------------------------//
const testReverseFibonacci = function(input,expectedOutput) { 
  return assert.deepEqual(reverseFibonacci(input),expectedOutput);
}

// 6. reverse fibonacci.
testReverseFibonacci(-2,[]);
testReverseFibonacci(0,[]);
testReverseFibonacci(1,[0]);
testReverseFibonacci(2,[1,0]);
testReverseFibonacci(5,[3,2,1,1,0]);
testReverseFibonacci(10,[34,21,13,8,5,3,2,1,1,0]);
//------------------------------------------------------------------------------------------------------//
const testFindGreatestNumber = function(input,expectedOutput) { 
  return assert.deepEqual(findGreatestNumber(input),expectedOutput);
}

// 7. greatest numberin a list.
testFindGreatestNumber([-2,-1,0],0);
testFindGreatestNumber([4],4);
testFindGreatestNumber([21,34,6],34);
testFindGreatestNumber([23,57,98,54],98);
testFindGreatestNumber([56,78,93,103],103);
testFindGreatestNumber([2,3,4,7,8,9,6,7,3,2,60,78,674],674);
//------------------------------------------------------------------------------------------------------//
const testFindSmallestNumber = function(input,expectedOutput) { 
return assert.deepEqual(findSmallestNumber(input),expectedOutput);
}

// 8. lowest number in a list.
testFindSmallestNumber([-5],-5);
testFindSmallestNumber([21,34,6],6);
testFindSmallestNumber([-2,-1,0],-2);
testFindSmallestNumber([23,57,98,54],23);
testFindSmallestNumber([56,78,93,103],56);
testFindSmallestNumber([2,3,4,7,8,9,6,7,3,2,60,78,674],2);
//------------------------------------------------------------------------------------------------------//
const testAverage = function(input,expectedOutput) { 
return assert.deepEqual(findAverage(input),expectedOutput);
}

// 9. find average of a list.
testAverage([0],0);
testAverage([1],1);
testAverage([-2,-1,0],-1);
testAverage([21,34,8],21);
testAverage([23,57,98,54],58);
testAverage([56,78,93,103],82.5);
//------------------------------------------------------------------------------------------------------//
const testMapLength = function(input,expectedOutput) { 
return assert.deepEqual(findLength(input),expectedOutput);
}

// 10. mapping lengths.
testMapLength([""],[0]);
testMapLength([],[]);
testMapLength(["annu"],[4]);
testMapLength(["leela","malliSir"],[5,8]);
testMapLength(["musta","afftab","sai","deepika"],[5,6,3,7]);
//------------------------------------------------------------------------------------------------------//
const testCountOddNumbers = function(input,expectedOutput) { 
return assert.deepEqual(countOddNumbers(input),expectedOutput);
}

// 11. counting odd numbers.
testCountOddNumbers([],0);
testCountOddNumbers([1],1);
testCountOddNumbers([21,34,6],1);
testCountOddNumbers([-2,-1,0],1);
testCountOddNumbers([23,57,98,54],2);
testCountOddNumbers([56,78,93,103],2);
testCountOddNumbers([2,3,4,7,8,9,6,7,3,2,60,78,674],5);
//------------------------------------------------------------------------------------------------------//
const testCountEvenNumbers = function(input,expectedOutput) { 
return assert.deepEqual(countEvenNumbers(input),expectedOutput);
}

// 12. counting even numbers.
testCountEvenNumbers([],0);
testCountEvenNumbers([21,34,6],2);
testCountEvenNumbers([-2,-1,0],2);
testCountEvenNumbers([23,57,98,54],2);
testCountEvenNumbers([56,78,93,103],2);
testCountEvenNumbers([2,3,4,7,8,9,6,7,3,2,60,78,674],8);
//------------------------------------------------------------------------------------------------------//
const testCountNumbersAbove = function(input,expectedOutput,secondInput) { 
return assert.deepEqual(countNumbersAbove(input,secondInput),expectedOutput);
}

// 13. counting how many numbers above a threshold.
testCountNumbersAbove([],0,1);
testCountNumbersAbove([21,34,6],2,8);
testCountNumbersAbove([23,57,98,54],4,0);
testCountNumbersAbove([56,78,93,103],2,79);
testCountNumbersAbove([2,3,4,7,8,9,6,7,3,2,60,78,674],5,7);
////------------------------------------------------------------------------------------------------------//
const testCountNumbersBelow = function(input,expectedOutput,secondInput) { 
return assert.deepEqual(countNumbersBelow(input,secondInput),expectedOutput);
}

// 14. counting how many numbers below a threshold.
testCountNumbersBelow([21,34,6],1,8);
testCountNumbersBelow([],0,8);
testCountNumbersBelow([23,57,98,54],0,0);
testCountNumbersBelow([56,78,93,103],2,79);
testCountNumbersBelow([2,3,4,7,8,9,6,7,3,2,60,78,674],6,7);
//------------------------------------------------------------------------------------------------------//
const testReverseArray = function(input,expectedOutput) { 
return assert.deepEqual(reverseArray(input),expectedOutput);
}

// 15. reversing an array.
testReverseArray([21,34,6],[6,34,21]);
testReverseArray([],[]);
testReverseArray([-2,-1,0],[0,-1,-2]);
testReverseArray([23,57,98,54],[54,98,57,23]);
testReverseArray([56,78,93,103],[103,93,78,56]);
//------------------------------------------------------------------------------------------------------//
const testFindIndex = function(input,expectedOutput,secondInput) { 
return assert.deepEqual(findIndex(input,secondInput),expectedOutput);
}

// 16. Index of number.
testFindIndex([21,34,6],2,6);
testFindIndex([23,57,98,54],0,23);
testFindIndex([56,78,93,103],3,103);
testFindIndex([2,3,4,7,8,9,6,7,3,2,60,78,674],undefined,61);
//------------------------------------------------------------------------------------------------------//
const testIsAscending = function(input,expectedOutput) { 
return assert.deepEqual(isAscending(input),expectedOutput);
}

// 17. check ascending order.
testIsAscending([21,34,6],false);
testIsAscending([],true);
testIsAscending([23,54,57,98],true);
testIsAscending([56,78,93,103],true);
testIsAscending([2,3,4,7,8,9,6,7,3,2,60,78,674],false);
//------------------------------------------------------------------------------------------------------//
const testIsDescending = function(input,expectedOutput) { 
return assert.deepEqual(isDescending(input),expectedOutput);
}

// 18. check descending order.
testIsDescending([34,21,6],true);
testIsDescending([],true);
testIsDescending([23,57,98,54],false);
testIsDescending([56,78,93,103],false);
testIsDescending([674,78,60,9,8,7,7,6,4,3,3,2,2],true);
//------------------------------------------------------------------------------------------------------//
const testExtractDigits = function(input,expectedOutput) { 
return assert.deepEqual(extractDigits(input),expectedOutput);
}

// 19. Extract digits.
testExtractDigits(0,[0]);
testExtractDigits(65,[6,5]);
testExtractDigits(12345,[1,2,3,4,5]);
testExtractDigits(7568493,[7,5,6,8,4,9,3]);
//------------------------------------------------------------------------------------------------------//
const testSelectUniqueElements = function(input,expectedOutput) { 
return assert.deepEqual(selectUniqueElements(input),expectedOutput);
}

// 20. unique.
testSelectUniqueElements([23,57,98,98,54],[23,57,98,54]);
testSelectUniqueElements([],[]);
testSelectUniqueElements([0],[0]);
testSelectUniqueElements([56,78,78,93,103],[56,78,93,103]);
testSelectUniqueElements([21,34,6,21,45,6,3,87,64,46,46],[21,34,6,45,3,87,64,46]);
testSelectUniqueElements([2,3,4,7,8,9,6,7,3,2,60,78,674],[2,3,4,7,8,9,6,60,78,674]);
//------------------------------------------------------------------------------------------------------//
const testSelectUnion = function(input,secondInput,expectedOutput) { 
  return assert.deepEqual(selectUnion(input,secondInput),expectedOutput);
}

// 21. union.
testSelectUnion([0],[0],[0]);
testSelectUnion([6,5],[6,5],[6,5]);
testSelectUnion([1,2,3,2,4,4,30,5],[1,4,2,30,4,50],[1,2,3,4,30,5,50]);
testSelectUnion([-1,-4,-1,7,6,9,9,0],[7,-5,6,8,4,9,3],[-1,-4,7,6,9,0,-5,8,4,3]);
//------------------------------------------------------------------------------------------------------//
const testIntersect = function(input,secondInput,expectedOutput) { 
return assert.deepEqual(intersect(input,secondInput),expectedOutput);
}

// 22. intersection.
testIntersect([0],[0],[0]);
testIntersect([6,5],[6,5],[6,5]);
testIntersect([1,2,3,4,30,5],[1,4,2,30,50],[1,4,2,30]);
testIntersect([-1,-4,7,6,9,0],[7,-5,6,8,-1,4,9,3],[7,6,-1,9]);
//------------------------------------------------------------------------------------------------------//
const testDiffer = function(input,secondInput,expectedOutput) { 
return assert.deepEqual(differ(input,secondInput),expectedOutput);
}

// 23. Difference.
testDiffer([0],[0],[]);
testDiffer([6,5],[6,5],[]);
testDiffer([1,2,3,2,4,4,30,5],[1,4,2,30,4,50],[3,5]);
testDiffer([-1,-4,-1,7,6,9,9,0],[7,-5,8,-1,4,9,3],[-4,6,0]);
//------------------------------------------------------------------------------------------------------//
const testIsSubset = function(input,secondInput,expectedOutput) { 
return assert.deepEqual(isSubset(input,secondInput),expectedOutput);
}

// 24. Is Subset.
testIsSubset([1,2],[1],true);
testIsSubset([1,2,],[1,],true);
testIsSubset([2,5,7,3,1],[2,1,8,1],false);
testIsSubset([1,2,5,7,3,1],[2,1,1],true);
//------------------------------------------------------------------------------------------------------//
const testZip = function(input,secondInput,expectedOutput) { 
return assert.deepEqual(zip(input,secondInput),expectedOutput);
}

// 25. Zip.
testZip([1,2],[1],[[1,1]]);
testZip([1,2,],[1,],[[1,1]]);
testZip([2,5,7,3,1],[2,1,1],[[2,2],[1,5],[1,7]]);
testZip([1,2,5,7,3,1],[2,1,1],[[2,1],[1,2],[1,5]]);
//------------------------------------------------------------------------------------------------------//
const testRotate = function(input,secondInput,expectedOutput) { 
return assert.deepEqual(rotate(input,secondInput),expectedOutput);
}

// 26. Rotate.
testRotate([0],0,[0]);
testRotate([1,2],1,[2,1]);
testRotate([2,5,7,3,1],4,[1,2,5,7,3]);
testRotate([1,2,5,7,3,1],3,[7,3,1,1,2,5]);
//------------------------------------------------------------------------------------------------------//
const testPartition = function(input,secondInput,expectedOutput) { 
return assert.deepEqual(partition(input,secondInput),expectedOutput);
}

// 27. partition.
testPartition([0],0,[[0],[]]);
testPartition([],0,[[],[]]);
testPartition([1,2],1,[[1],[2]]);
testPartition([2,5,7,3,1],2,[[1,2],[5,7,3]]);
testPartition([1,2,5,7,3,1],3,[[1,2,1,3],[5,7]]);
//------------------------------------------------------------------------------------------------------//

console.log("Test Passed ...!!!!");
