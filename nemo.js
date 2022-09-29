const nemo = ["nemo"];
const everyone = ["hello", "smort", " dark", " blue", " flag", "nemo", "vivi", "koll"]
const large = new Array(100).fill("nemo")
function findNemo(array) {
    let t0 = performance.now();
    let count = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "nemo") {

            return " hello"

        }

    }
    let t1 = performance.now()
    console.log("call ti find nemo took ", t1 - t0, "mill")
}

findNemo(large);

function logFirstTwo(arr) {
    console.log(arr[0] + "1")
    console.log(arr[1] + "2")
}
logFirstTwo(large)

// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
    let a = 5;//o(1)
    let b = 10;//o(1)
    let c = 50;//o(1)
    for (let i = 0; i < input; i++) {
        let x = i + 1;//O(n)
        let y = i + 2;//O(N)
        let z = i + 3;// o(n)

    }
    for (let j = 0; j < input; j++) {
        let p = j * 2;// o(n)
        let q = j * 2;// o(n)
    }
    let whoAmI = "I don't know";// o(1)
    // ( 1 + 1 +1 + n+n+n +n +n + 1) = o(n)
}
