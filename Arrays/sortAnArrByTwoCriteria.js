function sortArr(input) {
    let arr = input.slice(0);

    arr.sort((o1, o2) => {
        let compLenght = o1.length - o2.length;
        if(compLenght === 0){
            if(o1.toLowerCase() > o2.toLowerCase()) return 1;
            if (o2.toLowerCase() > o1.toLowerCase()) return -1;
            return 0;
        }
        return compLenght;
    });

    arr.forEach(x => console.log(x));
}

sortArr(['test',
    'Deny',
    'omen',
    'Default']);