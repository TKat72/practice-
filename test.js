function fizzbuzz(n) {


    for (let i = 1; i <= n; i++) {
        console.log(i)
        if (i % 15 === 0) {
            console.log("FizzBuzz")
        }
        else if (i % 5 === 0) {
            console.log("Buzz")
        }
        else if (i % 3 === 0) {
            console.log("Fizz")
        }
        else {
            console.log(i)
        }

    }

}

// fizzbuzz(20)


function prime(num, arr) {

    let res = 0;
    let total = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        console.log(arr[i])
        res = num / arr[i];
        total = res / arr[i + 1];
        console.log("res ", res)
        console.log("total ", total)
    }

    // for ( let i = 0 ; i < arr.lenght; i ++){
    //     console.log(hello)
    //     res = num / primeList[i]
    //     console.log(res, "Resd")
    //     if ( res ===1 ){
    //         return true
    //     }
    //     else if ( res ===3 ||res ===5 || res ===7 || res ===11 || res ===11){
    //         return true
    //     }

}
function minimumNumber(nums) {
    let res = [];
    let tem2 = []
    let tem = 0;
    let tempSmal = 0;
    let tempBig = 0;
    let rex = /^(1)([0-9]{1})$/g
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            if (tempSmal !== 0 && tempBig !== 0) {


                if (tempSmal < tempBig) {
                    tem2.push(tempSmal)
                    console.log("temp small 1", tempSmal)
                }
                else {
                    tem2.push(tempBig)
                    console.log("temp big 1", tempBig)
                }
            }
            if (nums[i] > nums[i + 1] && nums[i] !== 0 && nums[i + 1] !== 0) {
                tempSmal = nums[i + 1]
                tempBig = nums[i]
                res.push(tempSmal)
            } else {
                tempSmal = nums[i]
                tempBig = nums[i + 1]
                res.push(tempSmal)
            }
            console.log(" saml", tempSmal)
            console.log(" big", tempBig)
            console.log("result", res)

        }
    }
    let test = 12
    console.log(tem2)
    console.log(test.toString().match(rex))

}
// minimumNumber([
//     1,
//     2,
//     12,
//     21,
//     0, 15,66
// ]);
/**
 * Implement the solution in this function
 *
 * @param {number[]} arr1 First sorted array
 * @param {number[]} arr2 Second sorted array
 * @returns {number[]} Merged and sorted array
 */
function merge(arr1, arr2) {
    let result = [];

    let leng1 = arr1.length;
    let leng2 = arr2.length;

    if (arr1.length > arr2.length) {
        console.log(arr1[i])
        for (let i = 0; i < arr1.lenght; i++) {

            if (arr1[i] < arr2[i]) {

                if (arr1[i] === undefined) {
                    result.push(arr2[i])
                } else if (arr2[i] === undefined) {
                    result.push(arr1[i])
                } else {
                    result.push(arr1[i])
                    result.push(arr2[i])
                }
            } else {
                if (arr1[i] === undefined) {
                    result.push(arr2[i])
                } else if (arr2[i] === undefined) {
                    result.push(arr1[i])
                } else {
                    result.push(arr2[i])
                    result.push(arr1[i])
                }
            }
        }
    } else {
        console.log("In for 2 for")
        for (let i = 0; i < arr2.length; i++) {
            console.log("In for 2 for", arr1[i])
            if (arr1[i] < arr2[i]) {
                if (arr1[i] === undefined) {
                    result.push(arr2[i])
                } else if (arr2[i] === undefined) {
                    result.push(arr1[i])
                } else {
                    result.push(arr1[i])
                    result.push(arr2[i])
                }

            } else {
                if (arr1[i] === undefined) {
                    result.push(arr2[i])
                } else if (arr2[i] === undefined) {
                    result.push(arr1[i])
                } else {
                    result.push(arr2[i])
                    result.push(arr1[i])
                }
            }
        }
    }

    return result;
}


function merge1(arr1, arr2) {
    let result = [];

    if (arr2.length === 0) {
        return arr1;
    } else if (arr1.length === 0) {
        return arr2
    }
    else {

        if (arr1.length > arr2.length) {

            for (let i = 0; i < arr1.lenght; i++) {

                if (arr1[i] < arr2[i]) {

                    if (arr1[i] === undefined) {
                        result.push(arr2[i])
                    } else if (arr2[i] === undefined) {
                        result.push(arr1[i])
                    } else {
                        result.push(arr1[i])
                        result.push(arr2[i])
                    }
                } else {
                    if (arr1[i] === undefined) {
                        result.push(arr2[i])
                    } else if (arr2[i] === undefined) {
                        result.push(arr1[i])
                    } else {
                        result.push(arr2[i])
                        result.push(arr1[i])
                    }
                }
            }
        } else {
            console.log("In for 2 for")
            for (let i = 0; i < arr2.length; i++) {
                console.log("In for 2 for", arr1[i])
                if (arr1[i] < arr2[i]) {
                    if (arr1[i] === undefined) {
                        result.push(arr2[i])
                    } else if (arr2[i] === undefined) {
                        result.push(arr1[i])
                    } else {
                        result.push(arr1[i])
                        result.push(arr2[i])
                    }

                } else {
                    if (arr1[i] === undefined) {
                        result.push(arr2[i])
                    } else if (arr2[i] === undefined) {
                        result.push(arr1[i])
                    } else {
                        result.push(arr2[i])
                        result.push(arr1[i])
                    }
                }
            }
        }
    }

    return result;
}



function morge2(arr1, arr2) {
    let result = []
    let indx1 = 0;
    let indx2 = 0;
    let curr = 0;
    while (curr < (arr1.length + arr2.length)) {
        let num1 = arr1[indx1]
        let num2 = arr2[indx2]
        console.log("im herer", num1)
        console.log("num2 ", num2)
        if (num1 < num2 || num2 === undefined) {
            console.log(num1)
            result[curr] = num1
            indx1++;
        } else {
            result[curr] = num2
            indx2++
        }
        curr++
    }
    return result;
}
morge2([
    13457,
    14765,
    16030,
    16651,
    21540,
    26357,
    37635,
    48419,
    81250,
    98476
], [
    15551,
    16299,
    27598,
    43521,
    67371,
    68940,
    69004,
    75686,
    75899,
    81978
]);

// convert numbers to words 
function numberToText (n) {

    var num = "Zero One Two Three Four Five Six Seven Eight Nine Ten Eleven Twelve Thirteen Fourteen Fifteen Sixteen Seventeen Eighteen Nineteen".split(" ");
    var tens = "Twenty Thirty Forty Fifty Sixty Seventy Eighty Ninety".split(" ");


        if (n < 20) return num[n];
        var digit = n%10;
        if (n < 100) return tens[~~(n/10)-2] + (digit? " "+  num[digit]: "");
        if (n < 1000) return num[~~(n/100)] +" Hundred" + (n%100 === 0? "": " " +  numberToText(n%100));
        return  numberToText(~~(n/1000)) + " Thousand" + (n%1000 !== 0? " " +  numberToText(n%1000): "");

    }
