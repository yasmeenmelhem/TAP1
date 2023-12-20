function twoSum(nums, target) {
    const numMap = new Map();

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        // Check if the complement exists in the map
        if (numMap.has(complement)) {
            // If found, return the indices of the two numbers
            return [numMap.get(complement), i];
        }

        // Store the current number and its index in the map
        numMap.set(nums[i], i);
    }

    // If no solution is found
    return null;
}

// Example
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); // Output: [0, 1]
