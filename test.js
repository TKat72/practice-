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
    let tempSmal =0;
    let tempBig =0 ;
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
minimumNumber([
    1,
    2,
    12,
    21,
    0, 15,66
]);
