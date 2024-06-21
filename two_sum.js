// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function (nums, target) {
//     const hash = {};
//
//     nums.forEach((num, index) => {
//         hash[num] = index;
//     });
//
//     for (let i; i < nums.length; i++) {
//         let potKey = target - nums[i];
//         if (hash[potKey] && hash[potKey] !== i) {
//             return [i, hash[potKey]];
//         }
//     }
// };
//
// twoSum([3, 2, 4, 5], 6);

// answer the questions and find the source
const dummyDecrypt = (code, key) => String.fromCharCode(...code.map((c, i) => c ^ key.charCodeAt(i % key.length)));
const encoded = [111,91,68,76,14,21,11,112,0,10,12,5,83,15,93,76,28,30,0,81];
const lengthOfNumberInBits = '64'; // as string
const howManyThreadsJsHave = '1'; // as string
const binarySearchTimeComplexity = '(log n)'; // without big O
const funcToWaitForManyPromises = 'Promise.all';
const cssPropToMakeItSemiTransparent = 'opacity: 1';
const tsGenericTypeToMakeAllFieldsOptional = '<T>'
const key = (lengthOfNumberInBits
    + howManyThreadsJsHave
    + binarySearchTimeComplexity
    + funcToWaitForManyPromises
    + cssPropToMakeItSemiTransparent
    + tsGenericTypeToMakeAllFieldsOptional).replace(/[()<> ]/g, '');
const source = dummyDecrypt(encoded, key);
console.log(source)
