/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicatesWithHash = function (nums) {
    const hash = {};
    const result = [];
    nums.forEach((item) => {
        if (hash[item] !== item) {
            hash[item] = item;
        } else {
            result.push(item)
        }
    });
    return result;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicatesWithoutHash = function (nums) {
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        let idx = Math.abs(nums[i]) - 1;
        let val = nums[idx];

        if (val < 0) {
            result.push(Math.abs(nums[i]));
        } else {
            nums[idx] = -nums[idx];
        }
    }

    return result;
}

findDuplicatesWithHash([4, 3, 2, 7, 8, 2, 3, 1]);
findDuplicatesWithoutHash([4, 3, 2, 7, 8, 2, 3, 1]);