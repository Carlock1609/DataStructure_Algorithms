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

// POP ONLY REMOVES LAST ELEMENT
// USE SPLICE 
function selectionSort(numList) {
    // Initializes min and splice it off the list and puts it in front of list
    let min = Math.min(...numList);
    numList.unshift(numList.splice(numList.indexOf(min), 1))

    for(let i = 1; i < numList.length; i++) {
        if(numList[i] >= numList[i+1]) {
            // const x = [numList[i+1], numList[i]];
            [numList[i], numList[i+1]] = [numList[i+1], numList[i]];
        }
        else {
           continue
        }  
    }
    console.log(`${numList}`)
    for(let i = 0; i < numList.length; i++) {
        if(numList[i] <= numList[i+1]) {
            continue
        }
        else if(numList[i+1] === undefined) {
            continue
        }
        else {
            console.log(`Not sorted ${numList}`)
            return false
        }
    }
    return true
}

function main(numList) {
    let loops = 0
    while(selectionSort(numList) !== true) {
        selectionSort(numList);
        loops++;
    }
    console.log(`Sorted  ${numList}`);
}

main(numList(5))









// NOT WORKING
// 1. Iterate through array and assign bigNumber as the first element.
// 2. Each iteration is checking the elemnt after is larger, if it is, that is the new big number
// 3. at the end if it doesn't run into a bigger number, then it swaps
// function selectionSort(numList) {
//     // let bigNumber;
    // for(let i = 0; i < numList.length; i++) {
    //     let bigNumber = 0;
        // initializes bigNumber on first iteration
        // weird thing here, bugs out when checking if i = 0\
        // checks if its the last element in the list and if its greater
    // V3


    // V2
        // else if(numList[i] > numList[i+1]) {
        //     continue
        // }
        // else if(numList[i] < numList[i+1]) {
        //     bigNumber = numList[i+1]
        // }

    // V1
    //     if(i = (numList.length-1)) {
    //         if(bigNumber > numList[i]) {
                
    //             [numList[numList.indexOf(bigNumber)], numList[i]] = [numList[i], numList[numList.indexOf(bigNumber)]]
    //         } else {
    //             bigNumber = numList[i]
    //         }
    //     }
    //     else if(numList[i] > bigNumber) {
    //         bigNumber = numList[i]
    //     }
    //     // continues if bigNumber is larger
    //     else if(bigNumber > numList[i+1]) {
    //         continue
    //     } else {
    //         bigNumber = numList[i]
    //     }
    //     console.log(bigNumber)
    // }
    // console.log(numList)
    // return numList
    // }
// }
