function storeCatalogue(arr) {
    let products = [];

    let letters = [];

    arr.forEach(x => {
        let [name, price] = x.split(":").map(y => y.trim());

        products.push({
            name,
            price
        });
    });

    products.sort((o1, o2) => {
        if (o1.name > o2.name) return 1;
        if (o2.name > o1.name) return -1;
        return 0;
    })
        .forEach(x => {
        let letter = x.name.charAt(0);

        //if letter exists in letters
        if(letters.includes(letter)){
            console.log(`  ${x.name}: ${x.price}`);
        } else {
            letters.push(letter);

            console.log(letter);
            console.log(`  ${x.name}: ${x.price}`);
        }
    })

}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);