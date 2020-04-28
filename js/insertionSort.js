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
    // Lets try having an outer loop, that gets an iteration, then an inner forloop that uses that first iteration THEN
    // use the inner loop and try to start at that elements index, and loop to the first element OR until finds element that is smaller
    // PERFECT DONE. [i] gives us the first element, and [j] element iterates back from [i] to the frist element
    for(let i = 0; i < numList.length; i++) {
        console.log(`Outter i: ${i}`)
        let insert = numList[i]
        for(let j = i; j >= 0; j--) {
            console.log(`Inner j: ${j}`)
            if(i === 0) {
                continue
            }
            // I think we need to stick with J here since it is equal to I,
            // It needs to continue and retain that starting number 
            else if(insert <= numList[j-1]) { 
                continue
            }
            else if(insert >= numList[j-1]){
                let index = numList.indexOf(numList[j-1])
                let removeIndex = numList.indexOf(insert)
                console.log(`INDEX OF ${index}`)
                numList.splice(index,0,insert)
                numList.splice(removeIndex, 1)
                // [insert, numList[j-1] = insert, numList[j-1]]
            }
        }
    }

    console.log(numList)

    for(let i = 0; i < numList.length; i++) {
        if(numList[i] >= numList[i+1]) {
            continue;
        }
        else if(numList[i+1] == undefined) {
            break;
        } else {
            return false;
        }
    }

    return true
}

insertionSort([4,5,2,12,1,3])

const main = (numList) => {
    let loops = 0;
    while(insertionSort(numList) !== true) {
        insertionSort(numList)
        loops++;
    }
    console.log(`Sorted in ${loops}: ${numList}`)
}

// main(numList(5))

// let list = [2,3,4,5]

// let index = list.indexOf(list[2])


// list.splice(0,0, list[2])
// list.splice(list[2],1)
// console.log(list)