'use strict';
// const MyArray = require('./MyArray');

// 5. urlify a string
function urlify(url) {
  const urlArr = url.split(' ');
  console.log(urlArr);
  const urlified = urlArr.join('%20');
  return urlified;
}
/* O(n) via split */

// 6. Filtering an array without built in filter()
function customFilter(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 5) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
/*
O(n) due to for loop
TODO: could probably sort this for better runtime complexity i.e. using Array.sort() 
*/

// 7. max continuous sum
// ### 3: Max sum in the array
// You are given an array containing positive and negative integers.
// Write an algorithm which will find the largest sum in a continuous sequence.
// Input: [4,6,-3,5,-2,1]
// Output: 12

let maxSubarray = function(arr) {
  let maxEndingHere = 0;
  let maxSoFar = 0;
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    maxEndingHere = Math.max(0, maxEndingHere + item);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
    //console.log(item, maxEndingHere, maxSoFar);
  }
  return maxSoFar;
};

// 8. merge arrays, which have already been sorted, return total sorted merged array
function mergeArrays(arr1, arr2) {
  let biggestLength = Math.max(arr1.length, arr2.length);
  let curr1Idx = 0;
  let curr2Idx = 0;
  let merged = [];
  while (curr1Idx < arr1.length || curr2Idx < arr2.length) {
    if (curr1Idx >= arr1.length) {
      merged.push(arr2[curr2Idx]);
      curr2Idx++;
    } else if (curr2Idx >= arr2.length) {
      merged.push(merged.push(arr1[curr1Idx]));
      curr1Idx++;
    } else {
      if (arr1[curr1Idx] > arr2[curr2Idx]) {
        merged.push(arr2[curr2Idx]);
        curr2Idx++;
      } else {
        merged.push(arr1[curr1Idx]);
        curr1Idx++;
      }
    }
  }

  return merged;
}
/* 
O(n)
TODO: inconsistent behavior with swapped params, probably a length conditional issue
*/

function merge_arrays(arr1, arr2) {
  let idx1 = 0,
    idx2 = 0;
  let ret = [];
  while (idx1 < arr1.length && idx2 < arr2.length) {
    if (arr1[idx1] <= arr2[idx2]) ret.push(arr1[idx1++]);
    else ret.push(arr2[idx2++]);
  }
  // One array is now empty. Join the rest of the other array on.
  if (idx2 < arr2.length) {
    idx1 = idx2;
    arr1 = arr2;
  }
  while (idx1 < arr1.length) ret.push(arr1[idx1++]);
  return ret;
}
/*
 * Solution^ merged sort
 */

// 9. Remove Characters
function removeChars(str, chars) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (!str[i].match(`[${chars}]`)) {
      newStr += str[i];
    }
  }
  return newStr;
}
/*
 * ? complexity of match built in function inside that loop?
 */

// ### 6: Products
// Given an array of numbers, write an algorithm to find out the products of every number,
// except the one at that index.
// Input:[1, 3, 9, 4]
// Output:[108, 36, 12, 27]
function products(arr) {
  let ret = [];
  for (let idx1 = 0; idx1 < arr.length; ++idx1) {
    let prod = 1;
    for (let idx2 = 0; idx2 < arr.length; ++idx2) {
      if (idx1 != idx2) {
        prod *= arr[idx2];
      }
    }
    ret.push(prod);
  }
  return ret;
}

/*
### 7: 2D array
Write an algorithm which searches through a 2D array, and whenever it finds a zero should 
set the entire row and column to zero.
Input:
[[1,0,1,1,0],
[0,1,1,1,0],
[1,1,1,1,1],
[1,0,1,1,1],
[1,1,1,1,1]];
Output:
[[0,0,0,0,0],
[0,0,0,0,0],
[0,0,1,1,0],
[0,0,0,0,0],
[0,0,1,1,0]];
*/
function zeroRowsColumns(mat) {
  const zeroRows = [];
  const zeroCols = [];

  for (let i = 0; i < mat.length; i++) {
    let row = mat[i];
    for (let j = 0; j < row.length; j++) {
      const item = row[j];
      if (item === 0) {
        zeroRows[i] = true;
        zeroCols[j] = true;
      }
    }
  }

  for (let i = 0; i < mat.length; i++) {
    let row = mat[i];
    for (let j = 0; j < row.length; j++) {
      if (zeroRows[i] || zeroCols[j]) {
        row[j] = 0;
      }
    }
  }
  return mat;
}

/*
### 8: String rotation
Given two strings, str1 and str2, write a program that checks if str2 is a rotation of str1.
Input: amazon, azonma
Output: False
Input: amazon, azonam
Output: true
*/

function strRotation(string1, string2) {
  return (string2 + string2).indexOf(string1) != -1;
}

function main() {
  // const myArray = new MyArray();
  // myArray.push(3)
  // console.log(myArray);

  // const urlified = urlify('www.thinkful.com /tauh ida parv een');
  // console.log(urlified);
  // const toFilter = [1, 2, 3, 6, 7, 8];
  // console.log(customFilter(toFilter));
  // let arr1 = [1, 3, 6, 8, 11];
  // let arr2 = [2, 3, 5, 8, 9, 10];
  // console.log(mergeArrays(arr1, arr2));
  // console.log(mergeArrays(arr2, arr1));

  console.log(removeChars('Battle of the Vowels: Hawaii vs. Grozny', `aeiou`));
}

main();
