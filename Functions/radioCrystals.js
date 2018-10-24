function solve(arguments) {

    let finalThickness = arguments[0];
    let ore = 0;
    let countCuts = 0;
    let countLap = 0;
    let countGrind = 0;
    let countEtch = 0;
    let xRayCount = 0;

    let cut = (x) => x / 4;
    let lap = (x) => x - (x * 20 / 100);
    let grind = (x) => x - 20;
    let etch = (x) => x - 2;
    let xRay = (x) => x + 1; // This operation can only be done ONCE !!!
    let transportAndWash = (x) => Math.floor(x); // use this operation after every other operation !!

    for (let i = 1; i < arguments.length; i++) {
        ore = arguments[i];
        countCuts = 0;
        countLap = 0;
        countGrind = 0;
        countEtch = 0;
        xRayCount = 0;

        console.log(`Processing chunk ${ore} microns`);

        while (true) {
            if (cut(ore) < finalThickness) {
                if (cut(ore) - finalThickness + 1 === 0 && xRayCount == 0) {
                    ore = xRay(ore);
                    ore = cut(ore);
                    countCuts++;
                    xRayCount++;
                }
                console.log(`Cut x${countCuts}`);
                ore = transportAndWash(ore);
                console.log('Transporting and washing');
                if (xRayCount == 1) {
                    console.log(`X-ray x1`);
                }
                break;
            }
            countCuts++;
            ore = cut(ore);
        }

        if (ore != finalThickness && ore >= finalThickness) {
            while (true) {
                if (lap(ore) < finalThickness) {
                    if (lap(ore) - finalThickness + 1 === 0 && xRayCount == 0) {
                        ore = xRay(ore);
                        ore = lap(ore);
                        countLap++;
                        xRayCount++;
                    }
                    console.log(`Lap x${countLap}`);
                    ore = transportAndWash(ore);
                    console.log('Transporting and washing');
                    if (xRayCount == 1) {
                        console.log(`X-ray x1`);
                    }
                    break;
                }
                countLap++;
                ore = lap(ore);
            }
        }

        if (ore != finalThickness && ore >= finalThickness) {
            while (true) {
                if (grind(ore) < finalThickness) {
                    if (grind(ore) - finalThickness + 1 === 0 && xRayCount == 0) {
                        ore = xRay(ore);
                        ore = grind(ore);
                        countGrind++;
                        xRayCount++;
                    }
                    console.log(`Grind x${countGrind}`);
                    ore = transportAndWash(ore);
                    console.log('Transporting and washing');
                    if (xRayCount == 1) {
                        console.log(`X-ray x1`);
                    }
                    break;
                }
                countGrind++;
                ore = grind(ore);
            }
        }

        if (ore != finalThickness && ore >= finalThickness) {
            while (true) {
                if (etch(ore) < finalThickness) {
                    if (etch(ore) - finalThickness + 1 === 0 && xRayCount == 0) {
                        ore = xRay(ore);
                        ore = etch(ore);
                        countEtch++;
                        xRayCount++;
                    }
                    console.log(`Etch x${countEtch}`);
                    ore = transportAndWash(ore);
                    console.log('Transporting and washing');
                    if (xRayCount == 1) {
                        console.log(`X-ray x1`);
                    }
                    break;
                }
                countEtch++;
                ore = etch(ore);
            }
        }
        if (ore === finalThickness) {
            console.log(`Finished crystal ${ore} microns`);
        }
    }
}

radioCrystals([100,101]);