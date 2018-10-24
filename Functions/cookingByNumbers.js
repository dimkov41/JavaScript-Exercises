function cookingByNums(input){
    let number = input[0];

    for (let i = 1; i < input.length; i++) {
       console.log(number = +performOperation(input[i]));
    }

    function performOperation(operation){
        switch (operation) {
            case "chop":
                return number/2;
            case "dice":
                return Math.sqrt(number);
            case "spice":
                return number+1;
            case "bake":
                return number*3;
            case "fillet":
                return number - (number * 0.2);
        }
    }
}

//    • chop – divide the number by two
//     • dice – square root of number
//     • spice – add 1 to number
//     • bake – multiply number by 3
//     • fillet – subtract 20% from numbe

cookingByNums(['9',
    'dice',
    'spice',
    'chop',
    'bake',
    'fillet']);