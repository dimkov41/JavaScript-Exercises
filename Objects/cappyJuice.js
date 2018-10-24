function cappyJuice(arr) {
    let fruits = {};

    let output = {};

    for (let i = 0; i < arr.length; i++) {
        let [fruitName,quantity] = String(arr[i]).split("=>").map(x => x.trim());

        if(fruitName in fruits){
            fruits[fruitName] += +quantity;
        } else {
            fruits[fruitName] = +quantity;
        }

        if(fruits[fruitName] >= 1000){
                output[fruitName] = fruits[fruitName];
        }
    }

    for (let name in output){
        let bottles = Math.trunc(output[name] / 1000);
        console.log(`${name} => ${bottles}`);

    }


}


cappyJuice(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']);