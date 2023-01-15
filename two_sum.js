/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const hash = {};

    nums.forEach((num, index) => {
        hash[num] = index;
    });

    for (let i; i < nums.length; i++) {
        let potKey = target - nums[i];
        if (hash[potKey] && hash[potKey] !== i) {
            return [i, hash[potKey]];
        }
    }
};

twoSum([3, 2, 4, 5], 6);
