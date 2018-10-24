function heroicInventory(arr) {
    let heroes = [];

    for (let i = 0; i < arr.length; i++) {
        let currentHero = arr[i].split("/");

        let name = String(currentHero[0].trim());
        let level = Number(currentHero[1]);

        let items = [];
        if (currentHero.length > 2) {
            items = String(currentHero[2]).split(",").map(x => x.trim());
        }

        let hero = {
            name,
            level,
            items
        };

        heroes.push(hero);
    }

    console.log(JSON.stringify(heroes));
}

heroicInventory(['Isacc / 25 ',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);