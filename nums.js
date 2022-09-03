var twoSum = function (nums, target) {
    let temp;
    let result = [];
    for (let i = 0; i < nums.length - 1; i++) {

        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                result.push(i)
                result.push(j)
                console.log(result)
                return result;
            }
        }

    }
    // for (let j = 1; j < nums.length; j++) {
    //     console.log("im in for 2 ", nums[j])
    //     if (temp + nums[j] === target) {
    //         result.push(i)
    //         result.push(j)
    //         console.log("Im here 3", result)
    //         return temp;
    //     }

    // }

};

twoSum([2, 5, 5, 11], 10)


function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  /**
   * @param {ListNode} l1
   * @param {ListNode} l2
   * @return {ListNode}
   */
  var addTwoNumbers = function (l1, l2) {
    let carry = 0;
    let additionNode = new ListNode(0);
    let ansNode = additionNode;

    while (l1 || l2 || carry) {
      let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
      carry = Math.floor(sum / 10);
      sum %= 10;
      ansNode.next = new ListNode(sum);

      l1 = l1 ? l1.next : null;
      l2 = l2 ? l2.next : null;
      ansNode = ansNode.next;
    }

    return additionNode.next;
  };

  var reverse = function(x) {
    let reversedNum = x.toString().split('').reverse();
    let first = false;
    for(let i = 0; i < reversedNum.length; i++) {

	// if x < 0 which means the last element of revesed array is '-'
        if(reversedNum[reversedNum.length -1] === '-') {
            first = true;
            reversedNum.pop();
        }

	//if the last number of x (first element of revesed array) is 0
        if(reversedNum[0] === 0) {
            reversedNum.shift();
        }
    }
    const final = (first === true) ? -Number(reversedNum.join('')) : Number(reversedNum.join(''));
    return (final <= (Math.pow(2, 31) -1) && final >= -(Math.pow(2, 31))) ? final: 0;

};
