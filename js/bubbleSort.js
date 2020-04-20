// Bubble sort
// This algorithm will take "length of the list" many times or less to be sorted.


// 1. getting 10 random numbers in an array
function getList(n) {
    let numList = [];
    for(let i = 0; i <= n; i++) {
        let randomNum = Math.round(Math.random(100) * 100);
        numList.push(randomNum);
    }
    return numList;
}

// 1. looping over numList
// 2. checking if element is higher than the next if so, switch elements
// 3. loop over list again, and if no elements are greater, return true, else continue back
const sortList = (numList) => {
    // FIX THIS
    for(let i = 0; i < numList.length; i++) {
        if(numList[i] > numList[i+1]) {
        // const x = [numList[i+1], numList[i]];
        [numList[i], numList[i+1]] = [numList[i+1], numList[i]];
        }   
        console.log(`Iteration [${i}]: ${numList}`);
    }
    // Its checking for last element and coming up false - FIXED
    // checking
    for(let i = 0; i < numList.length; i++) {
        if(numList[i] <= numList[i+1]) {
            continue;
        }
        else if(numList[i+1] == undefined) {
            break;
        } else {
            return false;
        }
    }
    return true;
}

// Problem with the count
// 1. checking if list is sorted, if not, loop.
// 2. list will be sorted in length of list times or less.
function bubbleSort(numList) {
    let count = 0;
    while(sortList(numList) != true) {
        sortList(numList);
        count ++;
    }
    console.log(`Sorted in ${count} loops! ${numList}`)
}

// sortList([5,4,3])
bubbleSort(getList(10));