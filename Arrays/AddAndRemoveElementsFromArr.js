function addOrRemove(arr) {
    let initValue = 0;

    let lastArr = [];

    for (let i = 0; i < arr.length; i++) {
        initValue++;
        if (arr[i] === "add") {
            lastArr.push(initValue);
        } else if (arr[i] === "remove") {
            lastArr.pop();
        }
    }

    lastArr.forEach(x => console.log(x));

    if(lastArr.length === 0) console.log("Empty");
}

addOrRemove([
    'remove']);
