function printNelement(arr) {
    let step = arr.pop();

    arr.filter(filter).forEach(x => console.log(x));

    function filter(item,index) {
        if(index % step === 0){
            return item;
        }
    }
}