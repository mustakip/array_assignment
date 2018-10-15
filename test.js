const assert = require("assert");
const lib = require("./lib.js");


const assertTest = function(func,input,expectedOutput,secondInput) { 
  return assert.deepEqual(func(input,secondInput),expectedOutput);
}

// 1. selecting odd number.
assertTest(lib.extractOdd,[21,34,6],[21]);
assertTest(lib.extractOdd,[56,78,93,103],[93,103]);
assertTest(lib.extractOdd,[23,57,98,54],[23,57]);
assertTest(lib.extractOdd,[2,3,4,7,8,9,6,7,3,2,60,78,674],[3,7,9,7,3]);
assertTest(lib.extractOdd,[-2,-1,0],[-1]);

// 2. selecting even number.
assertTest(lib.extractEven,[21,34,6],[34,6]);
assertTest(lib.extractEven,[56,78,93,103],[56,78]);
assertTest(lib.extractEven,[23,57,98,54],[98,54]);
assertTest(lib.extractEven,[2,3,4,7,8,9,6,7,3,2,60,78,674],[2,4,8,6,2,60,78,674]);
assertTest(lib.extractEven,[-2,-1,0],[-2,0]);

// 3. sum of list of numbers.
assertTest(lib.addNumbers,[21,34,6],61);
assertTest(lib.addNumbers,[56,78,93,103],330);
assertTest(lib.addNumbers,[23,57,98,54],232);
assertTest(lib.addNumbers,[2,3,4,7,8,9,6,7,3,2,60,78,674],863);
assertTest(lib.addNumbers,[-2,-1,0],-3);

// 4. printing reverse.
assertTest(lib.reverse,[21,34,6],[6,34,21]);
assertTest(lib.reverse,[56,78,93,103],[103,93,78,56]);
assertTest(lib.reverse,[23,57,98,54],[54,98,57,23]);
assertTest(lib.reverse,[-2,-1,0],[0,-1,-2]);

// 5. selecting every second element. 
assertTest(lib.extractSecond,[21,34,6],[34]);
assertTest(lib.extractSecond,[56,78,93,103],[78,103]);
assertTest(lib.extractSecond,[23,57,98,54],[57,54]);
assertTest(lib.extractSecond,[2,3,4,7,8,9,6,7,3,2,60,78,674],[3,7,9,7,2,78]);
assertTest(lib.extractSecond,[-2,-1,0],[-1]);
  
// 6. reverse fibonacci.
assertTest(lib.reverseFibonacci,5,[3,2,1,1,0]);
assertTest(lib.reverseFibonacci,10,[34,21,13,8,5,3,2,1,1,0]);
assertTest(lib.reverseFibonacci,1,[0]);
assertTest(lib.reverseFibonacci,0,[]);
assertTest(lib.reverseFibonacci,2,[1,0]);

// 7. greatest numberin a list.
assertTest(lib.findGreatest,[21,34,6],34);
assertTest(lib.findGreatest,[56,78,93,103],103);
assertTest(lib.findGreatest,[23,57,98,54],98);
assertTest(lib.findGreatest,[2,3,4,7,8,9,6,7,3,2,60,78,674],674);
assertTest(lib.findGreatest,[-2,-1,0],0);

// 8. lowest number in a list.
assertTest(lib.findLowest,[21,34,6],6);
assertTest(lib.findLowest,[56,78,93,103],56);
assertTest(lib.findLowest,[23,57,98,54],23);
assertTest(lib.findLowest,[2,3,4,7,8,9,6,7,3,2,60,78,674],2);
assertTest(lib.findLowest,[-2,-1,0],-2);

// 9. average of a list.
assertTest(lib.average,[21,34,8],21);
assertTest(lib.average,[56,78,93,103],82.5);
assertTest(lib.average,[23,57,98,54],58);
assertTest(lib.average,[-2,-1,0],-1);

// 10. mapping lengths.
assertTest(lib.findLength,["annu"],[4]);
assertTest(lib.findLength,[""],[0]);
assertTest(lib.findLength,["leela","malliSir"],[5,8]);
assertTest(lib.findLength,["musta","afftab","sai","deepika"],[5,6,3,7]);

// 11. counting odd numbers.
assertTest(lib.countOdd,[21,34,6],1);
assertTest(lib.countOdd,[56,78,93,103],2);
assertTest(lib.countOdd,[23,57,98,54],2);
assertTest(lib.countOdd,[2,3,4,7,8,9,6,7,3,2,60,78,674],5);
assertTest(lib.countOdd,[-2,-1,0],1);

// 12. counting even numbers.
assertTest(lib.countEven,[21,34,6],2);
assertTest(lib.countEven,[56,78,93,103],2);
assertTest(lib.countEven,[23,57,98,54],2);
assertTest(lib.countEven,[2,3,4,7,8,9,6,7,3,2,60,78,674],8);
assertTest(lib.countEven,[-2,-1,0],2);

// 13. counting how many numbers above a threshold.
assertTest(lib.countNumbersAbove,[21,34,6],2,8);
assertTest(lib.countNumbersAbove,[56,78,93,103],2,79);
assertTest(lib.countNumbersAbove,[23,57,98,54],4,0);
assertTest(lib.countNumbersAbove,[2,3,4,7,8,9,6,7,3,2,60,78,674],5,7);

// 14. counting how many numbers below a threshold.
assertTest(lib.countNumbersBelow,[21,34,6],1,8);
assertTest(lib.countNumbersBelow,[56,78,93,103],2,79);
assertTest(lib.countNumbersBelow,[23,57,98,54],0,0);
assertTest(lib.countNumbersBelow,[2,3,4,7,8,9,6,7,3,2,60,78,674],6,7);

// 15. reversing an array.
assertTest(lib.reverseArray,[21,34,6],[6,34,21]);
assertTest(lib.reverseArray,[56,78,93,103],[103,93,78,56]);
assertTest(lib.reverseArray,[23,57,98,54],[54,98,57,23]);
assertTest(lib.reverseArray,[-2,-1,0],[0,-1,-2]);

// 16. Index of number.
assertTest(lib.findIndex,[21,34,6],2,6);
assertTest(lib.findIndex,[56,78,93,103],3,103);
assertTest(lib.findIndex,[23,57,98,54],0,23);
assertTest(lib.findIndex,[2,3,4,7,8,9,6,7,3,2,60,78,674],undefined,61);

// 17. ascending order.
assertTest(lib.ascend,[21,34,6],[6,21,34]);
assertTest(lib.ascend,[56,78,93,103],[56,78,93,103]);
assertTest(lib.ascend,[23,57,98,54],[23,54,57,98]);
assertTest(lib.ascend,[2,3,4,7,8,9,6,7,3,2,60,78,674],[2,2,3,3,4,6,7,7,8,9,60,78,674]);

// 18. descending order.
assertTest(lib.descend,[21,34,6],[34,21,6]);
assertTest(lib.descend,[56,78,93,103],[103,93,78,56]);
assertTest(lib.descend,[23,57,98,54],[98,57,54,23]);
assertTest(lib.descend,[2,3,4,7,8,9,6,7,3,2,60,78,674],[674,78,60,9,8,7,7,6,4,3,3,2,2]);

// 19. Extract digits.
assert.deepEqual(lib.extractArray(12345),[1,2,3,4,5]);
assert.deepEqual(lib.extractArray(7568493),[7,5,6,8,4,9,3]);
assert.deepEqual(lib.extractArray(0),[0]);
assert.deepEqual(lib.extractArray(65),[6,5]);

// 20. unique.
assertTest(lib.extractUnique,[21,34,6,21,45,6,3,87,64,46,46],[21,34,6,45,3,87,64,46]);
assertTest(lib.extractUnique,[56,78,78,93,103],[56,78,93,103]);
assertTest(lib.extractUnique,[23,57,98,98,54],[23,57,98,54]);
assertTest(lib.extractUnique,[2,3,4,7,8,9,6,7,3,2,60,78,674],[2,3,4,7,8,9,6,60,78,674]);

// 21. union.
assert.deepEqual(lib.extractUnion([1,2,3,2,4,4,30,5],[1,4,2,30,4,50]),[1,2,3,4,30,5,50]);
assert.deepEqual(lib.extractUnion([-1,-4,-1,7,6,9,9,0],[7,-5,6,8,4,9,3]),[-1,-4,7,6,9,0,-5,8,4,3]);
assert.deepEqual(lib.extractUnion([0],[0]),[0]);
assert.deepEqual(lib.extractUnion([6,5],[6,5]),[6,5]);

// 22. intersection.
assert.deepEqual(lib.intersect([1,2,3,2,4,4,30,5],[1,4,2,30,4,50]),[1,4,2,30]);
assert.deepEqual(lib.intersect([-1,-4,-1,7,6,9,9,0],[7,-5,6,8,-1,4,9,3]),[7,6,-1,9]);
assert.deepEqual(lib.intersect([0],[0]),[0]);
assert.deepEqual(lib.intersect([6,5],[6,5]),[6,5]);

// 23. Difference.
assert.deepEqual(lib.differ([1,2,3,2,4,4,30,5],[1,4,2,30,4,50]),[3,5]);
assert.deepEqual(lib.differ([-1,-4,-1,7,6,9,9,0],[7,-5,8,-1,4,9,3]),[-4,6,0]);
assert.deepEqual(lib.differ([0],[0]),[]);
assert.deepEqual(lib.differ([6,5],[6,5]),[]);

// 24. Is Subset.
assert.deepEqual(lib.checkSubset([1,2],[1]),"Yes");
assert.deepEqual(lib.checkSubset([1,2,5,7,3,1],[2,1,1]),"Yes");
assert.deepEqual(lib.checkSubset([1,2,],[1,]),"Yes");
assert.deepEqual(lib.checkSubset([2,5,7,3,1],[2,1,1]),"No");

// 25. Zip.
assert.deepEqual(lib.zip([1,2],[1]),[[1,1]]);
assert.deepEqual(lib.zip([1,2,5,7,3,1],[2,1,1]),[[2,1],[1,2],[1,5]]);
assert.deepEqual(lib.zip([1,2,],[1,]),[[1,1]]);
assert.deepEqual(lib.zip([2,5,7,3,1],[2,1,1]),[[2,2],[1,5],[1,7]]);

// 26. Rotate.
assert.deepEqual(lib.rotate([1,2],1),[2,1]);
assert.deepEqual(lib.rotate([1,2,5,7,3,1],3),[7,3,1,1,2,5]);
assert.deepEqual(lib.rotate([0],0),[0]);
assert.deepEqual(lib.rotate([2,5,7,3,1],4),[1,2,5,7,3]);

// 27. partition.
assert.deepEqual(lib.partition([1,2],1),[[1],[2]]);
assert.deepEqual(lib.partition([1,2,5,7,3,1],3),[[1,2,1,3],[5,7]]);
assert.deepEqual(lib.partition([0],0),[[0],[]]);
assert.deepEqual(lib.partition([2,5,7,3,1],2),[[1,2],[5,7,3]]);
