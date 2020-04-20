// Selection Sorting Algorithm

// 1. returns array of random numbers
function numList(n) {
    let numList = [];
    for(let i = 0; i < n; i++) {
        let randomNum = Math.round(Math.random(10) * 10);
        numList.push(randomNum);
    }
    return numList;
}

// NOT WORKING
// 1. Iterate through array and assign bigNumber as the first element.
// 2. Each iteration is checking the elemnt after is larger, if it is, that is the new big number
// 3. at the end if it doesn't run into a bigger number, then it swaps
function selectionSort(numList) {
    let bigNumber;
    for(let i = 0; i < numList.length; i++) {
        let bigNumber = 0;
        // initializes bigNumber on first iteration
        // weird thing here, bugs out when checking if i = 0\
        // checks if its the last element in the list and if its greater
        if(i = (numList.length-1)) {
            if(bigNumber > numList[i]) {
                [numList[bigNumber], numList[i]] = [numList[i], numList[bigNumber]]
            } else {
                bigNumber = numList[i]
            }
        }
        else if(numList[i] > bigNumber) {
            bigNumber = numList[i]
        }
        // continues if bigNumber is larger
        else if(bigNumber > numList[i+1]) {
            continue
        } else {
            bigNumber = numList[i]
        }
        
    }
    console.log(bigNumber)
    console.log(numList)
    return numList
}

selectionSort([16,17,4,13,3,6,9,14,15])

function main(numList) {
    let count = 0;
    while(count < (numList.length+1)) {
        selectionSort(numList)
    }
}

// main(numList(5))