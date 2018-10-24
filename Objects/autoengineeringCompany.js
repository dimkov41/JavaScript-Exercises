function company(arr) {

    let cars = new Map();

    arr.forEach(x => {
        let [brand, model, producedCars] = String(x).split("|").map(y => y.trim());
        producedCars = +producedCars;

        if (cars.has(brand)) {
            if(cars.get(brand).has(model)){
                let currentProducedCars = cars.get(brand).get(model);
                cars.get(brand).set(model,currentProducedCars + producedCars);

            } else {
                cars.get(brand).set(model,producedCars);
            }

        } else {
            let map = new Map();
            map.set(model,producedCars);

            cars.set(brand,map);
        }
    });

    cars.forEach((map,brand) => {
        console.log(brand);
        map.forEach((producedCars,model) =>{
            console.log(`###${model} -> ${producedCars}`);
        });
    });
}


company(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);