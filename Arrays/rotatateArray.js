function rotateArray(input) {
    let arr = input.slice(0);

    let reverseTimes = arr.pop();

    for (let i = 0; i < reverseTimes % arr.length; i++) {
        arr.unshift(arr.pop());
    }

    console.log(arr.join(" "));

}

rotateArray(['Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15']);