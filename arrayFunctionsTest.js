const assert = require("assert");
const lib = require("./arrayFunctionsLibrary.js"); 
const testAssertion = function(func,input,expectedOutput,secondInput) { 
  return assert.deepEqual(func(input,secondInput),expectedOutput);
}

// 1. selecting odd number.
testAssertion(lib.selectOddNumbers,[-2,-1,0],[-1]);
testAssertion(lib.selectOddNumbers,[21,34,6],[21]);
testAssertion(lib.selectOddNumbers,[23,57,98,54],[23,57]);
testAssertion(lib.selectOddNumbers,[56,78,93,103],[93,103]);
testAssertion(lib.selectOddNumbers,[2,3,4,7,8,9,6,7,3,2,60,78,674],[3,7,9,7,3]);

// 2. selecting even number.
testAssertion(lib.selectEvenNumbers,[-2,-1,0],[-2,0]);
testAssertion(lib.selectEvenNumbers,[21,34,6],[34,6]);
testAssertion(lib.selectEvenNumbers,[23,57,98,54],[98,54]);
testAssertion(lib.selectEvenNumbers,[56,78,93,103],[56,78]);
testAssertion(lib.selectEvenNumbers,[2,3,4,7,8,9,6,7,3,2,60,78,674],[2,4,8,6,2,60,78,674]);

// 3. sum of list of numbers.
testAssertion(lib.addNumbers,[21,34,6],61);
testAssertion(lib.addNumbers,[-2,-1,0],-3);
testAssertion(lib.addNumbers,[23,57,98,54],232);
testAssertion(lib.addNumbers,[56,78,93,103],330);
testAssertion(lib.addNumbers,[2,3,4,7,8,9,6,7,3,2,60,78,674],863);

// 4. printing reverse.
testAssertion(lib.reverse,[21,34,6],[6,34,21]);
testAssertion(lib.reverse,[-2,-1,0],[0,-1,-2]);
testAssertion(lib.reverse,[23,57,98,54],[54,98,57,23]);
testAssertion(lib.reverse,[56,78,93,103],[103,93,78,56]);

// 5. selecting every second element. 
testAssertion(lib.selectEverySecondNo,[21,34,6],[34]);
testAssertion(lib.selectEverySecondNo,[-2,-1,0],[-1]);
testAssertion(lib.selectEverySecondNo,[23,57,98,54],[57,54]);
testAssertion(lib.selectEverySecondNo,[56,78,93,103],[78,103]);
testAssertion(lib.selectEverySecondNo,[2,3,4,7,8,9,6,7,3,2,60,78,674],[3,7,9,7,2,78]);
  
// 6. reverse fibonacci.
testAssertion(lib.reverseFibonacci,0,[]);
testAssertion(lib.reverseFibonacci,1,[0]);
testAssertion(lib.reverseFibonacci,2,[1,0]);
testAssertion(lib.reverseFibonacci,5,[3,2,1,1,0]);
testAssertion(lib.reverseFibonacci,10,[34,21,13,8,5,3,2,1,1,0]);

// 7. greatest numberin a list.
testAssertion(lib.findGreatestNumber,[-2,-1,0],0);
testAssertion(lib.findGreatestNumber,[21,34,6],34);
testAssertion(lib.findGreatestNumber,[23,57,98,54],98);
testAssertion(lib.findGreatestNumber,[56,78,93,103],103);
testAssertion(lib.findGreatestNumber,[2,3,4,7,8,9,6,7,3,2,60,78,674],674);

// 8. lowest number in a list.
testAssertion(lib.findSmallestNumber,[21,34,6],6);
testAssertion(lib.findSmallestNumber,[-2,-1,0],-2);
testAssertion(lib.findSmallestNumber,[23,57,98,54],23);
testAssertion(lib.findSmallestNumber,[56,78,93,103],56);
testAssertion(lib.findSmallestNumber,[2,3,4,7,8,9,6,7,3,2,60,78,674],2);

// 9. find average of a list.
testAssertion(lib.findAverage,[-2,-1,0],-1);
testAssertion(lib.findAverage,[21,34,8],21);
testAssertion(lib.findAverage,[23,57,98,54],58);
testAssertion(lib.findAverage,[56,78,93,103],82.5);

// 10. mapping lengths.
testAssertion(lib.findLength,[""],[0]);
testAssertion(lib.findLength,["annu"],[4]);
testAssertion(lib.findLength,["leela","malliSir"],[5,8]);
testAssertion(lib.findLength,["musta","afftab","sai","deepika"],[5,6,3,7]);

// 11. counting odd numbers.
testAssertion(lib.countOddNumbers,[21,34,6],1);
testAssertion(lib.countOddNumbers,[-2,-1,0],1);
testAssertion(lib.countOddNumbers,[23,57,98,54],2);
testAssertion(lib.countOddNumbers,[56,78,93,103],2);
testAssertion(lib.countOddNumbers,[2,3,4,7,8,9,6,7,3,2,60,78,674],5);

// 12. counting even numbers.
testAssertion(lib.countEvenNumbers,[21,34,6],2);
testAssertion(lib.countEvenNumbers,[-2,-1,0],2);
testAssertion(lib.countEvenNumbers,[23,57,98,54],2);
testAssertion(lib.countEvenNumbers,[56,78,93,103],2);
testAssertion(lib.countEvenNumbers,[2,3,4,7,8,9,6,7,3,2,60,78,674],8);

// 13. counting how many numbers above a threshold.
testAssertion(lib.countNumbersAbove,[21,34,6],2,8);
testAssertion(lib.countNumbersAbove,[23,57,98,54],4,0);
testAssertion(lib.countNumbersAbove,[56,78,93,103],2,79);
testAssertion(lib.countNumbersAbove,[2,3,4,7,8,9,6,7,3,2,60,78,674],5,7);

// 14. counting how many numbers below a threshold.
testAssertion(lib.countNumbersBelow,[21,34,6],1,8);
testAssertion(lib.countNumbersBelow,[23,57,98,54],0,0);
testAssertion(lib.countNumbersBelow,[56,78,93,103],2,79);
testAssertion(lib.countNumbersBelow,[2,3,4,7,8,9,6,7,3,2,60,78,674],6,7);

// 15. reversing an array.
testAssertion(lib.reverseArray,[21,34,6],[6,34,21]);
testAssertion(lib.reverseArray,[-2,-1,0],[0,-1,-2]);
testAssertion(lib.reverseArray,[23,57,98,54],[54,98,57,23]);
testAssertion(lib.reverseArray,[56,78,93,103],[103,93,78,56]);

// 16. Index of number.
testAssertion(lib.findIndex,[21,34,6],2,6);
testAssertion(lib.findIndex,[23,57,98,54],0,23);
testAssertion(lib.findIndex,[56,78,93,103],3,103);
testAssertion(lib.findIndex,[2,3,4,7,8,9,6,7,3,2,60,78,674],undefined,61);

// 17. check ascending order.
testAssertion(lib.isAscending,[21,34,6],"No");
testAssertion(lib.isAscending,[23,54,57,98],"Yes");
testAssertion(lib.isAscending,[56,78,93,103],"Yes");
testAssertion(lib.isAscending,[2,3,4,7,8,9,6,7,3,2,60,78,674],"No");

// 18. check descending order.
testAssertion(lib.isDescending,[34,21,6],"Yes");
testAssertion(lib.isDescending,[23,57,98,54],"No");
testAssertion(lib.isDescending,[56,78,93,103],"No");
testAssertion(lib.isDescending,[674,78,60,9,8,7,7,6,4,3,3,2,2],"Yes");

// 19. Extract digits.
assert.deepEqual(lib.extractDigits(0),[0]);
assert.deepEqual(lib.extractDigits(65),[6,5]);
assert.deepEqual(lib.extractDigits(12345),[1,2,3,4,5]);
assert.deepEqual(lib.extractDigits(7568493),[7,5,6,8,4,9,3]);

// 20. unique.
testAssertion(lib.selectUniqueElements,[23,57,98,98,54],[23,57,98,54]);
testAssertion(lib.selectUniqueElements,[56,78,78,93,103],[56,78,93,103]);
testAssertion(lib.selectUniqueElements,[21,34,6,21,45,6,3,87,64,46,46],[21,34,6,45,3,87,64,46]);
testAssertion(lib.selectUniqueElements,[2,3,4,7,8,9,6,7,3,2,60,78,674],[2,3,4,7,8,9,6,60,78,674]);

// 21. union.
assert.deepEqual(lib.selectUnion([0],[0]),[0]);
assert.deepEqual(lib.selectUnion([6,5],[6,5]),[6,5]);
assert.deepEqual(lib.selectUnion([1,2,3,2,4,4,30,5],[1,4,2,30,4,50]),[1,2,3,4,30,5,50]);
assert.deepEqual(lib.selectUnion([-1,-4,-1,7,6,9,9,0],[7,-5,6,8,4,9,3]),[-1,-4,7,6,9,0,-5,8,4,3]);

// 22. intersection.
assert.deepEqual(lib.intersect([0],[0]),[0]);
assert.deepEqual(lib.intersect([6,5],[6,5]),[6,5]);
assert.deepEqual(lib.intersect([1,2,3,2,4,4,30,5],[1,4,2,30,4,50]),[1,4,2,30]);
assert.deepEqual(lib.intersect([-1,-4,-1,7,6,9,9,0],[7,-5,6,8,-1,4,9,3]),[7,6,-1,9]);

// 23. Difference.
assert.deepEqual(lib.differ([0],[0]),[]);
assert.deepEqual(lib.differ([6,5],[6,5]),[]);
assert.deepEqual(lib.differ([1,2,3,2,4,4,30,5],[1,4,2,30,4,50]),[3,5]);
assert.deepEqual(lib.differ([-1,-4,-1,7,6,9,9,0],[7,-5,8,-1,4,9,3]),[-4,6,0]);

// 24. Is Subset.
assert.deepEqual(lib.isSubset([1,2],[1]),true);
assert.deepEqual(lib.isSubset([1,2,],[1,]),true);
assert.deepEqual(lib.isSubset([2,5,7,3,1],[2,1,8,1]),false);
assert.deepEqual(lib.isSubset([1,2,5,7,3,1],[2,1,1]),true);

// 25. Zip.
assert.deepEqual(lib.zip([1,2],[1]),[[1,1]]);
assert.deepEqual(lib.zip([1,2,],[1,]),[[1,1]]);
assert.deepEqual(lib.zip([2,5,7,3,1],[2,1,1]),[[2,2],[1,5],[1,7]]);
assert.deepEqual(lib.zip([1,2,5,7,3,1],[2,1,1]),[[2,1],[1,2],[1,5]]);

// 26. Rotate.
assert.deepEqual(lib.rotate([0],0),[0]);
assert.deepEqual(lib.rotate([1,2],1),[2,1]);
assert.deepEqual(lib.rotate([2,5,7,3,1],4),[1,2,5,7,3]);
assert.deepEqual(lib.rotate([1,2,5,7,3,1],3),[7,3,1,1,2,5]);

// 27. partition.
assert.deepEqual(lib.partition([0],0),[[0],[]]);
assert.deepEqual(lib.partition([1,2],1),[[1],[2]]);
assert.deepEqual(lib.partition([2,5,7,3,1],2),[[1,2],[5,7,3]]);
assert.deepEqual(lib.partition([1,2,5,7,3,1],3),[[1,2,1,3],[5,7]]);

console.log("Test Passed ...!!!!");
