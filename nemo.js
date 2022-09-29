const nemo = ["nemo"];
const everyone = ["hello", "smort", " dark", " blue", " flag", "nemo", "vivi", "koll"]
const large = new Array(100).fill("nemo")
function findNemo(array) {
    let t0 = performance.now();
    let count = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "nemo") {
            console.log("find Nemo")
            return " hello"

        }
        console.log(count++)
    }
    let t1 = performance.now()
    console.log("call ti find nemo took ", t1 - t0, "mill")
}

findNemo(large);
