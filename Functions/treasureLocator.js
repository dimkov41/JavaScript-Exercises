function treasureLocator(input = []){
    let checkPoints = function (x,y){
        switch (true) {
            case x >= 1 && x <= 3 && y >= 1 && y <= 3:
                return "Tuvalu";
            case x >= 0 && x <= 2 && y >= 6 && y <= 8:
                return "Tonga";
            case x >= 5 && x <= 7 && y >= 3 && y <= 6:
                return "Samoa";
            case x >= 4 && x <= 9 && y >= 7 && y <= 8:
                return "Cook";
            case x >= 8 && x <= 9 && y >= 0 && y <= 1:
                return "Tokelau";
            default:
                return "On the bottom of the ocean";
        }
    }

    for (let i = 0; i < input.length; i+=2) {
        let x = +input[i] | 0;

        let y = +input[i + 1] | 0;
        console.log(checkPoints(x,y));

    }
}

treasureLocator([4, 2, 1.5, 6.5, 1, 3]);