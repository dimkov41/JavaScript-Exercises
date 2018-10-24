function uniqueSequences(arr) {
    let uniqueArr = new Map;

    for (let i = 0; i < arr.length; i++) {
        let array = JSON.parse(arr[i]).sort((a, b) => b - a);

        let toStore = `[${array.join(', ')}]`;

        if (!uniqueArr.has(toStore))
            uniqueArr.set(toStore, array.length);
    }

    Array.from(uniqueArr.keys()).sort((a, b) => uniqueArr.get(a) - uniqueArr.get(b)).forEach(x => console.log(x));
}

uniqueSequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"]);