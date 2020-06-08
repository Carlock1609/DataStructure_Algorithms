// This one has a loop
// IT RUNS AT AVERAGE 1.25s
function addUpTo(n) {
    let total = 0
    for(let i = 1; i <= n; i++) {
        total += i
    }
    return total
}
// console.log(addUpTo(2))

// This one returns a math equation
// IT RUNS AT AVERAGE .0001s
function addUpTo2(n) {
    return n * (n+1)/2
}
// console.log(addUpTo2(2))

// This method is how to get the Clock speed
// let t1 = performance.now()
// let t2 = performance.now()

// console.log(`${(t2 - t1) / 1000}`)

// TIMING YOUR FUNCTIONS SPEED WITH TIME IS NOT REALISTIC. EACH COMPUTER WILL RUN IT AT DIFFERENT SPEEDS
