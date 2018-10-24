function extractFromAnArray(input) {
    let arr = input.slice(0);

    let biggestNum = Number.NEGATIVE_INFINITY;

    let finalArr = arr.filter(element => {
        if (element > biggestNum) {
            biggestNum = element
            return true;
        }
        return false;
    });


    finalArr.forEach(x => console.log(x))


}

extractFromAnArray([1,0]);