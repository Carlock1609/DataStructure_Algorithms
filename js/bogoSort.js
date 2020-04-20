// Bogo sort algorithm
// Gotta figure out a better shuffle method


function randomNums(n) {
    let numList = [];
    for(let i = 0; i <= n-1; i++) {
        numList.push(Math.round(Math.random(100) * 100));
    }
    return numList;
}

const shuffleList = (numList) => {
    for(let i = 0; i <= numList.length-1; i++) {
        console.log(numList);
        let randomIndex = Math.round(Math.random(10) * 10);
        if(numList[i] > numList[randomIndex]) {
            numList[i], numList[randomIndex] = numList[randomIndex], numList[i]
        } else {
            continue;
        }
    }
    return numList;
}

// CURRETLY WORKING ON
function isSorted(numList) {
    for(let i = 0; i < numList.length; i++) {
        // let randomIndex = Math.round(Math.random(10) * 10)
        if(numList[i] <= numList[i+1]) {
            continue;
        } 
        else if(numList[i] > numList[i+1]) {
            shuffleList(randomNums(10));
        } else {
            return false
        }
    }
    return true;
}

const bogoSort = () => {
    let tries = 0;
    while(isSorted(shuffleList(randomNums(10))) != true) {
        isSorted(shuffleList(randomNums(10)));
        tries ++;
    }
    
    console.log(`Sorted in ${tries}`)
}

// bogoSort()