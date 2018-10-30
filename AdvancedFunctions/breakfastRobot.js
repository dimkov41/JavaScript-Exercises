function solution() {
    let allElements = {
        "protein": 0,
        "carbohydrate": 0,
        "fat": 0,
        "flavour": 0
    };
    let meals = {
        "apple": {
            "carbohydrate": 1,
            "flavour": 2
        },

        "coke": {
            "carbohydrate": 10,
            "flavour": 20
        },

        "burger": {
            "carbohydrate": 5,
            "fat": 7,
            "flavour": 3
        },

        "omelet": {
            "protein": 5,
            "fat": 1,
            "flavour": 1
        },

        "cheverme": {
            "protein": 10,
            "carbohydrate": 10,
            "fat": 10,
            "flavour": 10
        }
    };

    return function (commands) {
        let command = commands.split(" ")[0];
        let element = commands.split(" ")[1];
        let quantity = commands.split(" ")[2];

        switch (command) {
            case "restock":
                allElements[element] += +quantity;
                return "Success";
            case "prepare":
                for (let currentProduct in meals[element]) {
                    let necessaryQuantity = meals[element][currentProduct] * quantity;
                    if (necessaryQuantity > allElements[currentProduct]) {
                        return `Error: not enough ${currentProduct} in stock`
                    }
                }

                for (let currentProduct in meals[element]) {
                    let necessaryQuantity = meals[element][currentProduct] * quantity;
                    allElements[currentProduct] -= necessaryQuantity;
                }
                return "Success";
            case "report":
                return `protein=${allElements.protein} carbohydrate=${allElements.carbohydrate} fat=${allElements.fat} flavour=${allElements.flavour}`;
        }
    }
}