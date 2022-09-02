var twoSum = function (nums, target) {
    let temp;
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        console.log("im here ", nums[i])
        temp = nums[i];
        for (let j = 1; j < nums.length; j++) {
            console.log("im in for 2 ", nums[j])
            if (temp + nums[j] === target) {
                result.push(i)
                result.push(j)
                console.log(result)
                return temp;
            }

        }

    }

};

twoSum([2, 7, 11, 15], 9)
