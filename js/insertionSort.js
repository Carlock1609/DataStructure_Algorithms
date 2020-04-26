// Insertion Sort Algorithm

function numList(n) {
    let numList = []
    for(let i = 0; i < n; i++) {
        let randomNum = Math.round(Math.random(100) * 100)
        numList.unshift(randomNum)
    }
    return numList
}

// Must use insert method. take a index, check whether or not if it less than previous, if it is continue to next element,
// If element gets to first index OR element is greater than previous element, insert to that position
// Looks like you'll have to manuelly make a insert method since JS does not have one for Arrays
function insertionSort(numList) {
    for(let i = 0; i < numList.length; i++) {
        if(numList[i] >= numList[i+1]) {
            // I need this to keep continuing checking the previous element until it meets one that is less than it.
            
        }
        else if(numList[i+1] === undefined) {
            continue
        }
    }

    console.log(numList)

    for(let i = 0; numList.length; i++) {
        if(numList[i] >= numList[i+1]) {
            continue
        }
        else if(numList[i+1] === undefined) {
            continue
        }
        else {
            return false
        }
    }
    return true
}

insertionSort([5,4,10,3,1,4])



const main = (numList) => {
    let loops = 0;
    while(insertionSort(numList) !== true) {
        insertionSort(numList)
        loops++;
    }
    console.log(`Sorted in ${loops}: ${numList}`)
}

// main(numList(5))