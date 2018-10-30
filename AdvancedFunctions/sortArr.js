function sortArr(input,method){
    let comparator = {
        "asc": (a,b) => a - b,
        "desc": (a,b) => b - a
    };

    return input.sort(comparator[method]);

}

console.log(sortArr([14, 7, 17, 6, 8], 'desc'));