function magicMatrices(input){
    let arr = input.slice(0);

    let sums = [];

    sums = sumElements(arr,sums);

    console.log(sums.every(value => value === sums[0]));

    function sumElements(inputArr,sums){
        let arr = inputArr.slice(0);
        let totalSums = sums.slice(0);

        for (let row = 0; row < arr.length; row++) {
            let rowSum = 0;
            let colSum = 0;
            for (let col = 0; col < arr[row].length; col++) {
                rowSum += arr[col][row];
                colSum += arr[row][col];
            }
            totalSums.push(rowSum);
            totalSums.push(colSum)
        }

        return totalSums;
    }
}

magicMatrices([[],[]]);