function gameOfEpicness(inputKingdoms, inputBattles) {
    let kingdoms = new Map();


    kingdoms = fillKingdoms(inputKingdoms, kingdoms);

    kingdoms = fight(inputBattles, kingdoms);

    //sorting
    let sortedKingdoms = [...kingdoms.keys()]
        .sort((a, b) => {
            let aGeneralWins = Array.from(kingdoms.get(a).values()).reduce((acc, value) => acc + value.wins, 0);
            let bGeneralWins = Array.from(kingdoms.get(b).values()).reduce((acc, value) => acc + value.wins, 0);

            let aGeneralLosses = Array.from(kingdoms.get(a).values()).reduce((acc, value) => acc + value.losses, 0);
            let bGeneralLosses = Array.from(kingdoms.get(a).values()).reduce((acc, value) => acc + value.losses, 0);

            if (aGeneralWins === bGeneralWins) {
                if (aGeneralLosses === bGeneralLosses) {
                    return a > b;
                }

                return aGeneralLosses - bGeneralLosses;
            }

            return bGeneralWins - aGeneralWins;
        });

    if (sortedKingdoms.length > 0) {
        let winner = sortedKingdoms[0];

        console.log(`Winner: ${winner}`);
        let sortedGenerals = [...kingdoms.get(winner).keys()].sort((a,b) => kingdoms.get(winner).get(b).army - kingdoms.get(winner).get(a).army);
        sortedGenerals.forEach(currentGeneral => {
            console.log(`/\\general: ${currentGeneral}`);

            let properties = kingdoms.get(winner).get(currentGeneral);
            console.log(`---army: ${properties.army}`);
            console.log(`---wins: ${properties.wins}`);
            console.log(`---losses: ${properties.losses}`)
        })

    }


    function fillKingdoms(inputKindoms, kingdoms) {
        for (let i = 0; i < inputKingdoms.length; i++) {
            let currentKingdom = inputKingdoms[i].kingdom;
            let general = inputKingdoms[i].general;
            let army = +inputKingdoms[i].army;

            //iF kingdom not exists
            if (!kingdoms.has(currentKingdom)) {
                kingdoms.set(currentKingdom, new Map());
            }

            //if general exists
            if (kingdoms.get(currentKingdom).has(general)) {
                kingdoms.get(currentKingdom).set(general, {
                    army: kingdoms.get(currentKingdom).get(general).army + army,
                    wins: 0,
                    losses: 0
                });
            } else {
                kingdoms.get(currentKingdom).set(general, {
                    army: army,
                    wins: 0,
                    losses: 0
                });
            }
        }
        return kingdoms;
    }

    function fight(inputBattles, kingdoms) {
        for (let i = 0; i < inputBattles.length; i++) {
            let attackingKingdom = inputBattles[i][0];
            let attackingGeneral = inputBattles[i][1];
            let defendingKingdom = inputBattles[i][2];
            let defendingGeneral = inputBattles[i][3];

            if (attackingKingdom !== defendingKingdom) {
                let attackingArmy = kingdoms.get(attackingKingdom).get(attackingGeneral).army;
                let defendingArmy = kingdoms.get(defendingKingdom).get(defendingGeneral).army;

                if (attackingArmy > defendingArmy) {
                    kingdoms = modifyArmy(attackingKingdom, attackingGeneral, defendingKingdom, defendingGeneral, kingdoms);
                } else if (defendingArmy > attackingArmy) {
                    kingdoms = modifyArmy(defendingKingdom, defendingGeneral, attackingKingdom, attackingGeneral, kingdoms);
                }

            }
        }
        return kingdoms;

        function modifyArmy(winnerKingdom, winnerGeneral, loserKingdom, loserGeneral, kingdoms) {
            let winnerArmy = kingdoms.get(winnerKingdom).get(winnerGeneral).army;
            winnerArmy = winnerArmy + (winnerArmy * 0.1);
            kingdoms.get(winnerKingdom).get(winnerGeneral).army = Math.floor(winnerArmy);
            kingdoms.get(winnerKingdom).get(winnerGeneral).wins += 1;

            let loserArmy = kingdoms.get(loserKingdom).get(loserGeneral).army;
            loserArmy = loserArmy - (loserArmy * 0.1);
            kingdoms.get(loserKingdom).get(loserGeneral).army = Math.floor(loserArmy);
            kingdoms.get(loserKingdom).get(loserGeneral).losses += 1;

            return kingdoms;
        }
    }

}

gameOfEpicness([ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
        { kingdom: "Stonegate", general: "Ulric", army: 4900 },
        { kingdom: "Stonegate", general: "Doran", army: 70000 },
        { kingdom: "YorkenShire", general: "Quinn", army: 0 },
        { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
        { kingdom: "Maiden Way", general: "Berinon", army: 100000 } ],
    [ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Doran", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Stonegate", "Ulric"] ]);


// gameOfEpicness([{kingdom: "Maiden Way", general: "Merek", army: 5000},
//         {kingdom: "Stonegate", general: "Ulric", army: 4900},
//         {kingdom: "Stonegate", general: "Doran", army: 70000},
//         {kingdom: "YorkenShire", general: "Quinn", army: 0},
//         {kingdom: "YorkenShire", general: "Quinn", army: 2000}],
//     [["YorkenShire", "Quinn", "Stonegate", "Doran"],
//         ["Stonegate", "Ulric", "Maiden Way", "Merek"]]);